import { Button } from 'react-native';

const Home = ({navigation}) => {
    return (
      <Button
        title="Go to General Principles"
        onPress={() =>
          navigation.navigate('Principles', {principleObjectId: '65d01326ffe99a20332bc7fd'})
        }
      />
    );
  };
  export default Home;