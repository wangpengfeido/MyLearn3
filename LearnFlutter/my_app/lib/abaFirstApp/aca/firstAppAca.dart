import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

class FirstAppAca extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return new MaterialApp(title: 'Flutter Demo', home:new Scaffold(
        appBar: new AppBar(title: new Text('welcome to flutter')),
        body: new Center(child: new RandomWords())));
  }
}

// 使用stateful widget
class RandomWords extends StatefulWidget {
  @override
  RandomWordsState createState() => RandomWordsState();
}

class RandomWordsState extends State<RandomWords> {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return Text(wordPair.asPascalCase);
  }
}
