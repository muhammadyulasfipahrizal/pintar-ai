/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Chat from './Chat';

export default function KursusScreen() {
    return (
    <ScrollView>
    <View>
      <Text style={styles.title}>Html Fundamental</Text>
      <Text style={styles.heading}>Apa Itu HTML</Text>
      <Text style={styles.content}>Hypertext Markup Language adalah bahasa 
      markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban 
      internet. Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets 
      dan bahasa skrip lainnya seperti JavaScript, VBScript, dan PHP</Text>
      <Text style={styles.heading}>Sejarah HTML</Text>
      <Text style={styles.content}>Pada tahun 1980 seorang ahli fisika, Tim Berners-Lee, 
      dan juga seorang kontraktor di CERN (Organisasi Eropa untuk Riset Nuklir) mengusulkan 
      dan menyusun ENQUIRE, sebuah sistem untuk ilmuwan CERN dalam membagi dokumen. Sembilan 
      tahun kemudian, Berners-Lee mengusulkan adanya sistem markah berbasis internet. 
      Berners-Lee menspesifikasikan HTML dan menulis jaringan beserta perangkat lunaknya di akhir 
      1990. Pada tahun yang sama, Berners-Lee dan Robert Cailliau, insinyur sistem data CERN 
      berkolaborasi dalam sebuah permintaan untuk pendanaan, namun tidak diterima secara resmi oleh CERN. 
      Di catatan pribadinya sejak 1990 dia mendaftar "beberapa dari banyak daerah yang menggunakan 
      hypertext" dan pertama-tama menempatkan sebuah ensiklopedia. Penjelasan pertama yang dibagi 
      untuk umum dari HTML adalah sebuah dokumen yang disebut "Tanda HTML", pertama kali disebutkan di 
      Internet oleh Tim Berners-Lee pada akhir 1991. Tanda ini menggambarkan 18 elemen awal mula, 
      versi sederhana dari HTML. Kecuali untuk tag hyperlink, yang sangat dipengaruhi oleh SGMLguid, 
      in-house Standard Generalized Markup Language (SGML) berbasis format dokumen di CERN. Sebelas elemen 
      ini masih ada di HTML</Text>
    </View>
    <Chat/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'left',
    marginStart: 20,
  },
  content: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'left',
    paddingHorizontal: 20,
  },
});
