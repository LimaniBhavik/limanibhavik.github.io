import 'package:flutter/material.dart';

void main() {

  runApp(
    MaterialApp(
      home: Scaffold(
        // whole Scaffold Background
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: Text('I AM RICH...'),
          backgroundColor: Colors.blueGrey[900],
          shadowColor: Colors.blueGrey[900],
        ),
        body: Center(
          child: Image(
            image: NetworkImage('https://images.picxy.com/cache/2019/12/13/2af1c53833b1f1f5fe7ebc1cd1df0143.webp'),
          ),
        ),
      ),)
    ,
  );
}
