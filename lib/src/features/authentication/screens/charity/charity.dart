// ignore_for_file: unnecessary_new, prefer_const_constructors, unused_import, no_leading_underscores_for_local_identifiers

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:healthjunction/src/constants/colors.dart';
import 'package:healthjunction/src/constants/image_string.dart';
import 'package:healthjunction/src/features/authentication/screens/navbar/navbar.dart';
import 'package:healthjunction/src/features/authentication/screens/sidebar/sidebar.dart';

class CharityScreen extends StatelessWidget {
  CharityScreen({super.key});
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();
  void _handleMenuPressed() {
    scaffoldKey.currentState?.openDrawer();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      key: scaffoldKey,
      drawer: ReusableDrawerSideBar(
        color: cCharity,
        headerText: "Charity",
      ),
      appBar: Navbar(
          color: cCharity,
          textNav: "Charity",
          onMenuPressed: _handleMenuPressed),
      backgroundColor: Colors.white,
      body: Column(
        children: [
          Container(
            padding: EdgeInsets.only(left: 10),
            child: TweenAnimationBuilder(
              tween: Tween<double>(begin: 0, end: 1),
              duration: Duration(seconds: 9),
              builder: (BuildContext context, double _val, Widget? child) {
                return Opacity(
                  opacity: _val,
                  child: Padding(
                    padding: EdgeInsets.only(top: _val * 20),
                    child: child,
                  ),
                );
              },
              child: Image(
                image: AssetImage(iCharity),
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          StreamBuilder<QuerySnapshot>(
            stream: FirebaseFirestore.instance.collection('NGOs').snapshots(),
            builder: (context, snapshot) {
              List<Widget> charityorg = [];
              if (snapshot.hasData) {
                final charity = snapshot.data?.docs;

                for (var document in charity!) {
                  final data = document.data() as Map<String, dynamic>;
                  if (data.containsKey("Title") &&
                      data.containsKey("Location") &&
                      data.containsKey("Basic Information") &&
                      data.containsKey("Account Details")) {
                    final charityinfo = Card(
                      color: cCharity,
                      child: ExpansionTile(
                        title: Text("${data['Title']}",
                            style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold)),
                        children: <Widget>[
                          ListTile(
                            title: Text(
                                "Information: ${data['Basic Information']}\nContact:${data['Contact']}\nLocation:${data['Location']}"),
                          ),
                          ListTile(
                            title: Text("Account Details:"),
                            subtitle: SelectableText(
                              "${data['Account Details']}",
                              onTap: () {
                                Clipboard.setData(new ClipboardData(
                                    text: "${data['Account Details']}"));
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    content: Text('Copied to Clipboard'),
                                  ),
                                );
                              },
                            ),
                          ),
                        ],
                      ),
                    );

                    charityorg.add(charityinfo);
                  }
                }
              }
              return Expanded(
                child: ListView(
                  children: charityorg,
                ),
              );
            },
          ),
        ],
      ),
    ));
  }
}