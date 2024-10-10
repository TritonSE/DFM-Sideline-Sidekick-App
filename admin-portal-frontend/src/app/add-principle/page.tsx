"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, Suspense, useEffect, useState } from "react";

import { Category, addPage, deletePage } from "../api/Categories";
import {
  createGeneralPrinciple,
  getGeneralPrinciple,
  updateGeneralPrinciple,
} from "../api/principles";
import ProtectedRoute from "../components/ProtectedRoute";
import PublishPopup from "../components/PublishPopup";
import Toast from "../components/Toast";
import CloseIcon from "../icons/close.svg";

type IconProps = {
  "content-type": string;
  src: string;
};

function AddPrinciplePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryString = searchParams.get("category");
  const titleString = searchParams.get("title");
  const [category, setCategory] = useState(
    JSON.parse(categoryString ? categoryString : "") as Category,
  );
  const [title, setTitle] = useState(titleString ? titleString : "");
  const [contentHeaders, setContentHeaders] = useState([""]);
  const [contentDetails, setContentDetails] = useState([""]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [prevPrinciple, setPrevPrinciple] = useState({ _id: "" });
  const [toast, showToast] = useState(false);

  const [page, setPage] = useState({
    title: "",
    subtitle: "",
    content: {},
  });

  useEffect(() => {
    if (categoryString) {
      // Update the state when the query changes
      setCategory(JSON.parse(categoryString ? categoryString : "") as Category);
    }
  }, [categoryString]);

  useEffect(() => {
    if (titleString) {
      setTitle(titleString ? titleString : "");
    }
  }, [titleString]);

  useEffect(() => {
    const fetchEmergency = async () => {
      if (title) {
        const principle = await getGeneralPrinciple(title);
        setPrevPrinciple(principle);
        setPage({
          title: principle.title,
          subtitle: principle.subtitle,
          content: {},
        });
        setContentHeaders(Object.keys(principle.content ? principle.content : {}));
        setContentDetails(Object.values(principle.content ? principle.content : {}));
      }
    };
    void fetchEmergency();
  }, [title]);

  const publishPrinciple = async () => {
    try {
      setPopupVisible(false);
      if (page.title === "" || page.subtitle === "") {
        showToast(true);
        return;
      }
      const newPage = { ...page };
      newPage.content = Object.fromEntries(
        contentHeaders.map((key, i) => [key, contentDetails[i]]),
      );
      const newCategory = { ...category };
      if (title) {
        const toAdd = { ...newPage, _id: prevPrinciple._id };
        if (newPage.title !== title) {
          await deletePage(category._id, title);
          await addPage(category._id, newPage.title);
          newCategory.items = newCategory.items.filter((item) => item !== title);
          newCategory.items.push(newPage.title);
        }
        await updateGeneralPrinciple(toAdd);
      } else {
        await createGeneralPrinciple(newPage);
        await addPage(category._id, newPage.title);
        newCategory.items.push(newPage.title);
      }
      const encodedCategory = encodeURIComponent(JSON.stringify(newCategory));
      router.push(`/category?category=${encodedCategory}`);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCancel = () => {
    setPopupVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-auto p-20 bg-[#E5EFF5]">
      <div className="flex flex-row justify-between w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mb-6">
        <h1 className="text-[#182B49] mt-[20px] text-start text-2xl font-bold">
          {title ? "Editing General Principle: " : "Add a General Principle to: "}{" "}
          <span className="text-[#00629B]">{title ? title : category.title}</span>
        </h1>
      </div>
      <div className="flex flex-col w-full md:w-11/12 lg:w-10/12 xl:w-9/12 p-4 md:p-10 rounded-md bg-white">
        <h1 className="text-[#182B49] mb-[20px] text-start text-2xl font-bold">Page Details</h1>
        <p className="text-[#6C6C6C] mb-[10px] font-roboto text-base font-normal">Page Title*</p>
        <input
          className="flex p-[13px_14px] items-start gap-2 self-stretch rounded-[5px] border border-[#B4B4B4] bg-white mb-[10px]"
          type="text"
          value={page.title}
          placeholder="Enter a title"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPage((prevPage) => {
              return { ...prevPage, title: e.target.value };
            });
          }}
        />
        <p className="text-[#6C6C6C] mb-[10px] font-roboto text-base font-normal">
          Page Description*
        </p>
        <textarea
          className="flex p-[13px_14px] items-start gap-2 self-stretch rounded-[5px] border border-[#B4B4B4] bg-white mb-[20px]"
          value={page.subtitle}
          placeholder="Enter a page description"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setPage((prevPage) => {
              return { ...prevPage, subtitle: e.target.value };
            });
          }}
        />
        <h1 className="text-[#182B49] text-start text-xl font-bold">Content</h1>
        {contentHeaders.map((header, index) => {
          return (
            <div className="flex w-full" key={index}>
              <span className="w-full">
                <input
                  className="flex p-[13px_14px] items-start gap-2 self-stretch rounded-[5px] border border-[#B4B4B4] bg-white mt-[20px] mb-[5px] w-full"
                  type="text"
                  value={header}
                  placeholder="Section header"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setContentHeaders((prevHeaders) => {
                      const newHeaders = [...prevHeaders];
                      newHeaders[index] = e.target.value;
                      return newHeaders;
                    });
                  }}
                />
                <textarea
                  className="flex p-[13px_14px] items-start gap-2 self-stretch rounded-[5px] border border-[#B4B4B4] bg-white w-full"
                  value={contentDetails[index]}
                  placeholder="Section details"
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setContentDetails((prevDetails) => {
                      const newDetails = [...prevDetails];
                      newDetails[index] = e.target.value;
                      return newDetails;
                    });
                  }}
                />
              </span>
              <button
                className="flex justify-end mb-4"
                onClick={() => {
                  setContentDetails((prevDetails) => {
                    const newDetails = [...prevDetails];
                    newDetails.splice(index, 1);
                    return newDetails;
                  });
                  setContentHeaders((prevHeaders) => {
                    const newHeaders = [...prevHeaders];
                    newHeaders.splice(index, 1);
                    return newHeaders;
                  });
                }}
              >
                <img
                  src={(CloseIcon as IconProps).src}
                  alt="Close"
                  className="ml-[8px] mt-[28px] w-3 h-3"
                />
              </button>
            </div>
          );
        })}
        <button
          className="px-2 sm:px-4 py-2 text-[#182B49] text-sm font-bold underline"
          onClick={() => {
            setContentDetails((prevDetails) => {
              const newDetails = [...prevDetails, ""];
              return newDetails;
            });
            setContentHeaders((prevHeaders) => {
              const newHeaders = [...prevHeaders, ""];
              return newHeaders;
            });
          }}
        >
          + Add section to Overview
        </button>
      </div>
      <div className="flex flex-row justify-between w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mt-6">
        <button
          onClick={() => {
            router.back();
          }}
          className="flex text-black px-4 py-2 underline"
        >
          Close
        </button>
        <button
          onClick={() => {
            setPopupVisible(true);
          }}
          className="bg-[#00629B] text-white px-4 py-2 rounded-[5px]"
        >
          Publish
        </button>
      </div>
      {popupVisible && (
        <PublishPopup
          onPublish={() => {
            void publishPrinciple();
          }}
          onCancel={handleCancel}
        />
      )}
      {toast && (
        <Toast
          backgroundColor={"#FF0000"}
          message={"Title and subtitle must be non-empty"}
          onClose={() => {
            showToast(false);
          }}
          isError={true}
        />
      )}
    </div>
  );
}

export default function AddPrinciple() {
  return (
    <ProtectedRoute>
      <Suspense>
        <AddPrinciplePage />
      </Suspense>
    </ProtectedRoute>
  );
}
