import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { TabBar, Route, TabBarProps } from 'react-native-tab-view'


export default function App() {
  return (
      <TabViewExample />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} >
    <View
      style={{
        position: 'relative',
        top: 58,
        left: 52,
        backgroundColor: 'green',
        width: 1,
        height: 20,
        transform: [{scaleX: 50}]
      }}
    />
    <View
      style={{
        position: 'absolute',
        top: 78,
        left: 36,
        backgroundColor: 'red',
        width: 50,
        height: 20
      }}
    />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'green' }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }} />
);

const FifthRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }} />
);
const SixthRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }} />
);
const SeventhRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
  seventh: SeventhRoute,
});

function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First and foremost tab' },
    { key: 'second', title: 'Second and even more exciting tab' },
    { key: 'third', title: 'Third and tad bit less than paar tab' },
    { key: 'fourth', title: 'Fourth' },
    { key: 'fifth', title: 'Fourth' },
    { key: 'sixth', title: 'Fourth' },
    { key: 'seventh', title: 'Fourth' },
    
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={MyTabBar}
      style={{paddingTop: 40}}
    />
  );
}


function MyTabBar(props) {
  return (
    <TabBar
      {...props}
      scrollEnabled={true}
      style={tabBarStyles.style}
      contentContainerStyle={tabBarStyles.contentContainerStyle }
      tabStyle={tabBarStyles.tabStyle}
      labelStyle={tabBarStyles.labelStyle}
      indicatorContainerStyle={tabBarStyles.indicatorContainerStyle}
      indicatorStyle={tabBarStyles.indicatorStyle}
      pressColor={'blue'}
      gap={48}
    />
  );
}

const tabBarStyles = StyleSheet.create({
  style: {
    elevation: 0,
    height: 40,
  },
  contentContainerStyle: {
    width: 'auto',
    paddingLeft: 22,
    paddingRight: 30
  },
  tabStyle: {
    width: 'auto',
    minHeight: 40,
    margin: 0,
    padding: 0
  },
  labelStyle: {
    margin: 0,
    textTransform: 'none',
    letterSpacing: 0.08,
    fontSize: 16,
    lineHeight: 16
  },
  indicatorContainerStyle: {
    marginRight: 16
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white'
  }
})
