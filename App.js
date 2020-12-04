import React, {useEffect} from 'react';
import {DeviceEventEmitter, PermissionsAndroid, View} from 'react-native';
import {RNAndroidAudioStore} from 'react-native-get-music-files';

const permissionCheck = async () => {
  try {
    const result = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    console.log(result);
    return result;
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};

const permissionRequest = async () => {
  try {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    console.log(result);
    if (result === 'granted') return true;
    else return false;
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};

const permissionHanlder = async () => {
  if (!(await permissionCheck())) {
    await permissionRequest();
  }

  console.log('Get music info...');

    try{
        RNAndroidAudioStore.getAll({
            blured: false, // works only when 'cover' is set to true
            artist: true,
            duration: true, //default : true
            genre: true,
            title: true,
            minimumSongDuration: 10000, // get songs bigger than 10000 miliseconds duration,
            //batchNumber: 5,
            //delay: 100,
          })
          .then((tracks)=>{console.log(tracks.length)})
          .catch((er) => console.error('getAll: ',JSON.stringify(error)));
    } catch (e){
        console.error('TryCatch: ', JSON.stringify(e))
    }
   

};

const App = () => {

  useEffect(() => {
    // DeviceEventEmitter.addListener('onBatchReceived', (params) => {
    //     console.log('Event listener triggered')
    //   console.log(JSON.stringify(params.batch));
    // });

    permissionHanlder();

    // return ()=>{
    //     DeviceEventEmitter.removeAllListeners();
    // }
  }, []);

  return <View></View>;
};

export default App;
