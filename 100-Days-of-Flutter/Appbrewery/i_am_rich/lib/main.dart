import 'package:flutter/material.dart';

void main() {

  runApp(
    MaterialApp(
      home: Scaffold(
        // whole Scaffold Background
        backgroundColor: Colors.blueGrey,
        // AppBar Widget
        appBar: AppBar(
          // AppBar Title Text
          title: Text('I am Rich...!'),
          // AppBar Title Background 
          backgroundColor: Colors.blueGrey[900],
          // AppBar Title Shadow Color
          shadowColor: Colors.blueGrey[900],
        ),
        // Center Widget
        body: Center(
          // Image Widget
          child: Image(
            // Network Image fetch Image from the URL
            image: NetworkImage('https://images.picxy.com/cache/2019/12/13/2af1c53833b1f1f5fe7ebc1cd1df0143.webp'),
          ),
        ),
      ),)
    ,
  );
}
