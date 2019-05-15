# Generated by Django 2.2.1 on 2019-05-15 02:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('rfid_number', models.BigIntegerField(primary_key=True, serialize=False)),
                ('student_number', models.BigIntegerField(null=True)),
                ('name', models.CharField(max_length=100)),
                ('balance', models.PositiveIntegerField(default=0)),
                ('is_using', models.BooleanField(default=False)),
                ('last_login', models.DateTimeField(editable=False, null=True)),
                ('last_logout', models.DateTimeField(editable=False, null=True)),
                ('last_balance_change', models.DateTimeField(editable=False, null=True)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]
