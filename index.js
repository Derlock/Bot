const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); // a garder en version desktop
const token = process.env.token // a garder en version heroku
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

import all necessary commands and libraries
import discord
import asyncio
import logging

@client.event
async def on_ready():
print('logged in as')
print(client.user.name)
print(client.user.id)
print('-----')
newUserDMMessage = "Welcome DM"

#Public Welcome
@client.event
async def on_member_join(member):
print("Recognised that a member called " + member.name + " joined")
await client.send_message(member, newUserDMMessage)
await client.send_message(discord.Object(id='CHANNELID'), 'Welcome!')
print("Sent message to " + member.name)
print("Sent message about " + member.name + " to #CHANNEL")

#Mod Leave Announcement
@client.event
async def on_member_remove(member):
print("Recognised that a member called " + member.name + " left")
await client.send_message(discord.Object(id='CHANNELID'), member.name + ' left')
print("Sent message to #CHANNEL")

client.run('Token')
