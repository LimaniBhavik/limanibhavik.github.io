import 'dart:math';
import 'package:flutter/material.dart';

void main() {
  return runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(
          title: Text('Dicee'),
          backgroundColor: Colors.red,
        ),
        body: DicePage(),
      ),
    ),
  );
}

class DicePage extends StatefulWidget {
  @override
  _DicePageState createState() => _DicePageState();
}

class _DicePageState extends State<DicePage> {
  int leftDiceNumber = 1;
  int rightDiceNumber = 2;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        children: <Widget>[
          Expanded(
            child: FlatButton(
              onPressed: () {
                setState(() {
                  changes();
                });
              },
              child: Image.asset('images/$leftDiceNumber.png'),
            ),
          ),
          Expanded(
            child: FlatButton(
              onPressed: () {
                setState(() {
                  changes();
                });
              },
              child: Text(
                '$leftDiceNumber',
                style: TextStyle(
                  color: Colors.white,
                  decoration: TextDecoration.underline,
                  fontSize: 150,
                  decorationColor: Colors.red,
                  decorationStyle: TextDecorationStyle.wavy,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
  void changes(){
    rightDiceNumber = Random().nextInt(6)+1;
    print('Right $rightDiceNumber Pressed!');
    leftDiceNumber = Random().nextInt(6)+1;
    print('Left $leftDiceNumber Pressed!');
  }
}


