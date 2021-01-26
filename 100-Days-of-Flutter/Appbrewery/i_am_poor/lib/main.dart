import 'package:flutter/material.dart';

void main() {

  runApp(
     MaterialApp(
       debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          title: Text(
            'Do you think I am Poor in Design?',
            style: TextStyle(color: Colors.teal),
          ),
          backgroundColor: Colors.white,
          shadowColor: Colors.teal,
        ),
        body: Center(
          child: Image(
            image: AssetImage('icons/lead.jpeg'),
          ),
        ),
      ),
    ),
  );
}