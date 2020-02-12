import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { WebView } from 'react-native-webview';
import { cralwer } from './crawler/code';
global.Buffer = global.Buffer || require('buffer').Buffer

export default function App() {

  const [data, setData] = useState();
  const [head, setHead] = useState(['content', 'day'])
  const [tail, setTail] = useState(['내용', '날짜'])

  const result = async() => {
    let result = await cralwer();
    setData(result);
  }

  useEffect(() => {
    result()
  },[]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.notice}>공지사항</Text>
        <Table borderStyle={{borderWidth: 1.5, borderColor: '#c8e1ff'}} style={styles.table}>
            <Row data={head} flexArr={[4,1.3]} style={styles.head} textStyle={styles.text}/>
            <Rows data={data} flexArr={[4,1.3]}  style={styles.rows} textStyle={styles.text}/>
            <Row data={tail} flexArr={[4,1.3]} style={styles.tail}></Row>
        </Table>
        <WebView
        source={{uri: 'http://sw.hanyang.ac.kr/board/notice.php'}}
        style={{margin: 0,marginTop:10 ,width: 375, height:500}}
      />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3669CF',
  },
  notice: {
    textAlign: 'center',
    marginTop: 40,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  table: {
    margin: 20,
    marginTop: 35,
    borderRadius:15,

  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 15,
    padding: 5
  },
  rows: {
    backgroundColor: '#FFFFFF',
  },
  tail: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
});
