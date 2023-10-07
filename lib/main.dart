// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, duplicate_import, unused_import

import 'package:flutter/material.dart';
import 'package:healthjunction/src/constants/image_string.dart';
import 'package:healthjunction/src/features/authentication/screens/forget_password/forget_password_mail/forget_password_mail.dart';
import 'package:healthjunction/src/features/authentication/screens/forget_password/forget_password_phone/forget_password_phone.dart';
import 'package:healthjunction/src/features/authentication/screens/loginscreen/login.dart';
import 'package:healthjunction/src/features/authentication/screens/signupscreen/signup.dart';
import 'package:healthjunction/src/features/authentication/screens/welcome/welcome.dart';
import 'package:healthjunction/src/utils/theme/theme.dart';
import 'package:healthjunction/src/utils/theme/theme.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      getPages: [
        GetPage(name: '/login', page: () => LoginScreen()), // Login Screen
        GetPage(name: '/signup', page: () => SignupScreen()), //Sign-up Screen
        GetPage(
            name: '/Forget-Mail',
            page: () => ForgetPasswordViaEmail()), // Mail OTP SEND
        GetPage(
            name: '/Forget-Phone',
            page: () => ForgetPasswordViaPhone()), //Phone OTP SEND
      ],
      title: 'Health Junction',
      debugShowCheckedModeBanner: false,
      theme: TAppTheme.lightTheme,
      darkTheme: TAppTheme.darkTheme,
      themeMode: ThemeMode.system,
      home: Welcome(),
    );
  }
}

// class MyHomePage extends StatefulWidget {
//   const MyHomePage({super.key, required this.title});
//   final String title;
//   @override
//   State<MyHomePage> createState() => _MyHomePageState();
// }

// class _MyHomePageState extends State<MyHomePage> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//         appBar: AppBar(
//           title: Text('Health Junction'),
//         ),
//         body: Center(
//           child: Image.asset(tSplashImage),
//         ));
//   }
// }
