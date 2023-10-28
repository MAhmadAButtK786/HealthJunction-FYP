// User Repository to perform DataBase Operations

// ignore_for_file: unused_field, non_constant_identifier_names, avoid_types_as_parameter_names, body_might_complete_normally_catch_error

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:healthjunction/src/features/authentication/models/user_model.dart';

class UserRepository extends GetxController {
  static UserRepository get instance => Get.find();

  final _db = FirebaseFirestore.instance;

  Future<void> createUser(UserModel user) async {
    await _db
        .collection("Users")
        .doc(user.id) // Use the user's id as the document id
        .set(user.toJson()) // Use toJson(), not toJason()
        .then((value) => Get.snackbar(
              "Success",
              "Your Account has been created",
              snackPosition: SnackPosition.BOTTOM,
              backgroundColor: Colors.green.withOpacity(0.1),
              colorText: Colors.green,
            ))
        .catchError((error) {
      Get.snackbar(
        "Error",
        "Something Went wrong",
        snackPosition: SnackPosition.BOTTOM,
        backgroundColor: Colors.redAccent.withOpacity(0.1),
        colorText: Colors.redAccent,
      );
    });
  }
}
