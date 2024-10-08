# Generated by Django 5.1 on 2024-08-27 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("recipes", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="recipe",
            name="img",
            field=models.TextField(default="", null=True),
        ),
        migrations.AlterField(
            model_name="recipe",
            name="ingredients",
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name="recipe",
            name="instructions",
            field=models.TextField(null=True),
        ),
    ]
