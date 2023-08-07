import 'package:alisveris_app/features/account/services/account_service.dart';
import 'package:alisveris_app/features/account/widgets/account_button.dart';
import 'package:flutter/material.dart';

class TopButtons extends StatelessWidget {
  const TopButtons({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            AccountButton(
              text: 'Siparişler',
              onTap: () {},
            ),
          ],
        ),
        const SizedBox(height: 10),
        Row(
          children: [
            AccountButton(
              text: 'Favoriler',
              onTap: () {},
            ),
          ],
        ),
         const SizedBox(height: 10),
         Row(
          children: [
            AccountButton(
              text: 'Çıkış Yap',
              onTap: () => AccountServices().logOut(context),
            ),
          ],
        ),
         const SizedBox(height: 10),
        Row(
          children: [
            AccountButton(
              text: 'Satıcı ol',
              onTap: () {},
            ),
          ],
        ),
      ],
    );
  } 
}