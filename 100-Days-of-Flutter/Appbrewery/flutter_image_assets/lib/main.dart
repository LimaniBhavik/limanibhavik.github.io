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
          title: Text('Local Asset Image...!'),
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
            image: AssetImage('images/diamond.png'),
          ),
        ),
      ),)
    ,
  );
}
