import 'package:flutter/material.dart';

// 导入package
import 'package:english_words/english_words.dart';

class FirstAppAba extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return new MaterialApp(
      title: 'Flutter Demo',
      home: new Scaffold(
        appBar: new AppBar(title: new Text('welcome to flutter')),
        body: new Center(child: new Text(wordPair.asPascalCase)),
      ),
    );
  }
}
