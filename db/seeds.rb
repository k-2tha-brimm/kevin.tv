# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

thumbnail = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail1 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail2 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail3 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail4 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail5 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail6 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail7= open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail8 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail9 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail10 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail11 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail12 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail13 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail14 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail15 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail16 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail17 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail18 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail19 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail20 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail21 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail22 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail23 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail24 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail25 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail26 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail27 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail28 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail29 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail30 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail31 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail32 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail33 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail34 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail35 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail36 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail37 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail38 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail39 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail40 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
thumbnail41 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')

User.create(username: 'demo', password: 'hunter12', date_of_birth: '2016-11-02', email: 'demo@gmail.com').avatar.attach(io: thumbnail, filename: 'avatar.jpeg')
User.create(username: 'thedemo', password: 'hunter12', date_of_birth: '1992-02-02', email: 'gemo@gmail.com').avatar.attach(io: thumbnail1, filename: 'avatar1.jpeg')
User.create(username: 'smeli5a', password: 'hunter12', date_of_birth: '1989-02-05', email: 'melisa@gmail.com').avatar.attach(io: thumbnail2, filename: 'avatar2.jpeg')
User.create(username: 'kevin', password: 'hunter12', date_of_birth: '1987-09-01', email: 'kev.brimm@gmail.com').avatar.attach(io: thumbnail3, filename: 'avatar3.jpeg')
User.create(username: 'ashton', password: 'hunter12', date_of_birth: '1986-05-07', email: 'ahston210z@gmail.com').avatar.attach(io: thumbnail4, filename: 'avatar4.jpeg')
User.create(username: 'king-ben', password: 'hunter12', date_of_birth: '1987-05-05', email: 'king_ben@gmail.com').avatar.attach(io: thumbnail5, filename: 'avatar5.jpeg')
User.create(username: 'fake_user', password: 'hunter12', date_of_birth: '1980-12-03', email: 'fake@gmail.com').avatar.attach(io: thumbnail6, filename: 'avatar6.jpeg')
User.create(username: 'twitch_stream', password: 'hunter12', date_of_birth: '2000-06-11', email: 'twitch@gmail.com').avatar.attach(io: thumbnail7, filename: 'avatar7.jpeg')
User.create(username: 'halo2besthalo', password: 'hunter12', date_of_birth: '1995-04-19', email: 'kevin_tv@gmail.com').avatar.attach(io: thumbnail8, filename: 'avatar8.jpeg')
User.create(username: 'halo5rules', password: 'hunter12', date_of_birth: '2000-11-02', email: 'h5rules@gmail.com').avatar.attach(io: thumbnail9, filename: 'avatar9.jpeg')
k = User.create(username: 'i_love_halo', password: 'hunter12', date_of_birth: '1999-02-02', email: 'ilovehalo@gmail.com').avatar.attach(io: thumbnail10, filename: 'avatar10.jpeg')
hh = User.create(username: 'Keystone_Light', password: 'hunter12', date_of_birth: '1990-02-02', email: 'ilovehalo@gmail.com').avatar.attach(io: thumbnail11, filename: 'avatar11.jpeg')
kk = User.create(username: 'budweiser', password: 'hunter12', date_of_birth: '1999-08-02', email: 'ilovehalo@gmail.com').avatar.attach(io: thumbnail12, filename: 'avatar12.jpeg')
jj = User.create(username: 'Milwaukees_Best', password: 'hunter12', date_of_birth: '1999-02-11', email: 'ilovehalo@gmail.com').avatar.attach(io: thumbnail13, filename: 'avatar13.jpeg')
ll = User.create(username: 'PBR', password: 'hunter12', date_of_birth: '1996-07-09', email: 'ilovehalo@gmail.com').avatar.attach(io: thumbnail14, filename: 'avatar14.jpeg')
mm = User.create(username: 'Natty_Ice', password: 'hunter12', date_of_birth: '1979-12-02', email: 'ilovehalo@gmail.com').avatar.attach(io: thumbnail15, filename: 'avatar15.jpeg')
bb = User.create(username: 'Hamms', password: 'hunter12', date_of_birth: '1953-12-12', email: 'ilovehalo@gmail.com').avatar.attach(io: thumbnail16, filename: 'avatar16.jpeg')
l = User.create(username: 'this_is_halo', password: 'hunter12', date_of_birth: '1980-09-09', email: 'thisishalo@gmail.com').avatar.attach(io: thumbnail17, filename: 'avatar17.jpeg')
m = User.create(username: 'heroes_of_the_storm', password: 'hunter12', date_of_birth: '2005-07-10', email: 'hots@gmail.com').avatar.attach(io: thumbnail18, filename: 'avatar18.jpeg')
n = User.create(username: 'em0_kid', password: 'hunter12', date_of_birth: '1990-08-08', email: 'em0kid@gmail.com').avatar.attach(io: thumbnail19, filename: 'avatar19.jpeg')
o = User.create(username: 'OMGTHISISREAL', password: 'hunter12', date_of_birth: '1992-11-30', email: 'omg@gmail.com').avatar.attach(io: thumbnail20, filename: 'avatar20.jpeg')
p = User.create(username: 'fighting_games', password: 'hunter12', date_of_birth: '2004-04-04', email: 'fightinggames@gmail.com').avatar.attach(io: thumbnail21, filename: 'avatar21.jpeg')
q = User.create(username: 'summit1g', password: 'hunter12', date_of_birth: '1991-01-06', email: 'summit@gmail.com').avatar.attach(io: thumbnail22, filename: 'avatar22.jpeg')
r = User.create(username: 'drdisrespect', password: 'hunter12', date_of_birth: '1980-07-21', email: 'thedoc@gmail.com').avatar.attach(io: thumbnail23, filename: 'avatar23.jpeg')
s = User.create(username: 'ninja', password: 'hunter12', date_of_birth: '1999-11-09', email: 'ninja@gmail.com').avatar.attach(io: thumbnail24, filename: 'avatar24.jpeg')
t = User.create(username: 'grimmy', password: 'hunter12', date_of_birth: '1995-10-19', email: 'grim@gmail.com').avatar.attach(io: thumbnail25, filename: 'avatar25.jpeg')
u = User.create(username: 'summit1g', password: 'hunter12', date_of_birth: '2012-01-01', email: 'appacademy@gmail.com').avatar.attach(io: thumbnail26, filename: 'avatar26.jpeg')
v = User.create(username: 'leet_yeet', password: 'hunter12', date_of_birth: '1991-01-06', email: 'twitchsux@gmail.com').avatar.attach(io: thumbnail27, filename: 'avatar27.jpeg')
w = User.create(username: 'notleetyeet', password: 'hunter12', date_of_birth: '2005-05-09', email: 'kevin@gmail.com').avatar.attach(io: thumbnail28, filename: 'avatar28.jpeg')
x = User.create(username: 'gerardbutler', password: 'hunter12', date_of_birth: '1991-01-06', email: 'demo@hotmail.com').avatar.attach(io: thumbnail29, filename: 'avatar29.jpeg')
y = User.create(username: 'theguywhoplaysironman', password: 'hunter12', date_of_birth: '1991-01-06', email: 'robertdowney@gmail.com').avatar.attach(io: thumbnail30, filename: 'avatar30.jpeg')
z = User.create(username: 'robert_downey', password: 'hunter12', date_of_birth: '1991-01-06', email: 'aa@gmail.com').avatar.attach(io: thumbnail31, filename: 'avatar31.jpeg')
aa = User.create(username: 'melisa', password: 'hunter12', date_of_birth: '1991-01-06', email: 'wtfamidoing@gmail.com').avatar.attach(io: thumbnail32, filename: 'avatar32.jpeg')
ab = User.create(username: 'kev_cuddy', password: 'hunter12', date_of_birth: '1991-01-06', email: 'itis10pm@gmail.com').avatar.attach(io: thumbnail33, filename: 'avatar33.jpeg')
ac = User.create(username: 'kev_cudi', password: 'hunter12', date_of_birth: '1991-01-06', email: 'freebeer@gmail.com').avatar.attach(io: thumbnail34, filename: 'avatar34.jpeg')
ad = User.create(username: 'big_byrd', password: 'hunter12', date_of_birth: '1987-12-11', email: 'richard@gmail.com').avatar.attach(io: thumbnail35, filename: 'avatar35.jpeg')
ae = User.create(username: 'steve', password: 'hunter12', date_of_birth: '2001-30-02', email: 'steve@gmail.com').avatar.attach(io: thumbnail36, filename: 'avatar36.jpeg')
af = User.create(username: 'benjamin', password: 'hunter12', date_of_birth: '1991-01-06', email: 'ben@gmail.com').avatar.attach(io: thumbnail37, filename: 'avatar37.jpeg')
ag = User.create(username: 'meli5a', password: 'hunter12', date_of_birth: '1989-02-05', email: 'meli5a@gmail.com').avatar.attach(io: thumbnail38, filename: 'avatar38.jpeg')
ah User.create(username: 'kevykev', password: 'hunter12', date_of_birth: '1991-01-06', email: 'kevykev@gmail.com').avatar.attach(io: thumbnail39, filename: 'avatar39.jpeg')
ai = User.create(username: 'poser', password: 'hunter12', date_of_birth: '1970-04-14', email: 'icnacode@gmail.com').avatar.attach(io: thumbnail40, filename: 'avatar40.jpeg')
aj = User.create(username: 'HALO', password: 'hunter12', date_of_birth: '1993-05-16', email: 'bungee@gmail.com').avatar.attach(io: thumbnail41, filename: 'avatar41.jpeg')
aj.avatar.attach(io: thumbnail, filename: 'avatar.jpeg')

# .photo.attach(io: File.open("/Users/k.brimm/Desktop/kevinTv-game-images/for-honor-twitch.jpg"), filename: 'forhonor.jpg')


yuppie = Game.create(title: 'Yuppie Psycho')
yup = open('https://s3-us-west-1.amazonaws.com/app-seed-names/yuppie-psycho-twitch.jpg')
yuppie.photo.attach(io: yup, filename: 'yuppie')

tekkan = Game.create(title: 'Tekkan 7')
tek = open('https://s3-us-west-1.amazonaws.com/app-seed-names/tekken-7-twitch.jpg')
tekkan.photo.attach(io: tek, filename: 'tekkan')
# tekkan

battletoads = Game.create(title: 'Battletoads')
bat = open('https://s3-us-west-1.amazonaws.com/app-seed-names/battletoads-twitch.jpg')
battletoads.photo.attach(io: bat, filename: 'battle')

honor = Game.create(title: 'For Honor')
hon = open('https://s3-us-west-1.amazonaws.com/app-seed-names/for-honor-twitch.jpg')
honor.photo.attach(io: hon, filename: 'honor')

zelda = Game.create(title: 'Zelda a Link to the Past')
zel = open('https://s3-us-west-1.amazonaws.com/app-seed-names/zelda-a-linktothepast-twitch.jpg')
zelda.photo.attach(io: zel, filename: 'zelda')

p5 = Game.create(title: 'Persona 5')
per = open('https://s3-us-west-1.amazonaws.com/app-seed-names/persona-5-twitch.jpg')
p5.photo.attach(io: p5, filename: 'p5')

ds = Game.create(title: 'Dark Souls')
ds1 = open('https://s3-us-west-1.amazonaws.com/app-seed-names/dark-souls-twitch.jpg')
ds.photo.attach(io: ds, filename: 'ds')

ce = Game.create(title: 'Conan Exiles')
conan = open('https://s3-us-west-1.amazonaws.com/app-seed-names/conan-exiles-twitch.jpg')
ce.photo.attach(io: conan, filename: 'conan')

monster = Game.create(title: 'Monster Hunter World')
mons = open('https://s3-us-west-1.amazonaws.com/app-seed-names/monster-hunter-world-twitch.jpg')
monster.photo.attach(io: mons, filename: 'mons')

mk8 = Game.create(title: 'Mario Kart 8')
mortal = open('https://s3-us-west-1.amazonaws.com/app-seed-names/mario-kart-8-twitch.jpg')
mk8.photo.attach(io: mortal, filename: 'mortal')

d3 = Game.create(title: 'Diablo 3')
diab = open('https://s3-us-west-1.amazonaws.com/app-seed-names/diable-3-twitch.jpg')
d3.photo.attach(io: diab, filename: 'diab')

sandt = Game.create(title: 'Science and Technology')
science = open('https://s3-us-west-1.amazonaws.com/app-seed-names/science-technology-twitch.jpg')
sandt.photo.attach(io: science, filename: 'science')

warthunder = Game.create(title: 'War Thunder')
thun = open('https://s3-us-west-1.amazonaws.com/app-seed-names/war-thunder-twitch.jpg')
warthunder.photo.attach(io: thun, filename: 'thun')

ssbm = Game.create(title: 'Super Smash Brothers: Melee')
smash = open('https://s3-us-west-1.amazonaws.com/app-seed-names/ssb-melee-twitch.jpg')
ssbm.photo.attach(io: smash, filename: 'smash')

fall = Game.create(title: 'Human: Fall Flat')
hooman = open('https://s3-us-west-1.amazonaws.com/app-seed-names/human-fall-flat-twitch.jpg')
fall.photo.attach(io: hooman, filename: 'hooman')

rome = Game.create(title: 'Imperator: Rome')
rome = open('https://s3-us-west-1.amazonaws.com/app-seed-names/imperator-rome-twitch.jpg')
rome.photo.attach(io: rome, filename: 'rome')

stardew = Game.create(title: 'Stardew Valley')
star = open('https://s3-us-west-1.amazonaws.com/app-seed-names/stardew-valley-twitch.jpg')
stardew.photo.attach(io: star, filename: 'star')

# goi = Game.create(title: 'Getting Over It')
# goi
# goi

# ds3 = Game.create(title: 'Dark Souls 3')
# ds3
# ds3

# gungeon = Game.create(title: 'Enter the Gungeon')
# gungeon
# gungeon

# sings = Game.create(title: 'Twitch Sings')
# sings
# sings

# epic7 = Game.create(title: 'Epic 7')
# epic7
# epic7

# splitgate = Game.create(title: 'Splitgate')
# splitgate
# splitgate

# mlb = Game.create(title: 'MLB The Show 2019')
# mlb
# mlb

# eurotruck = Game.create(title: 'Euro Truck Simulator')
# eurotruck
# eurotruck

# smite = Game.create(title: 'Smite')
# smite
# smite

# albion = Game.create(title: 'Albion Online')
# albion
# albion

# gw2 = Game.create(title: 'Guild Wars 2')
# gw2
# gw2

# bf5 = Game.create(title: 'Battlefield 5')
# bf5
# bf5

# ssbu = Game.create(title: 'Super Smash Brothers Ultimate')
# ssbu
# ssbu

# rust = Game.create(title: 'Rust')
# rust
# rust

# warships = Game.create(title: 'World of Warships')
# warships
# warships

# osu = Game.create(title: 'osu!')
# osu
# osu

# ark = Game.create(title: 'ARK')
# ark
# ark

# m64 = Game.create(title: 'Mario 64')
# m64
# m64

# division2 = Game.create(title: 'The Division 2')
# division2
# division2

# botw = Game.create(title: 'The Legend of Zelda: Breath of the Wild')
# botw
# botw

# dayz = Game.create(title: 'Day Z')
# dayz
# dayz

# nba = Game.create(title: 'NBA 2k19')
# nba
# nba

# border = Game.create(title: 'Borderlands 2')
# skyrim = Game.create(title: 'The Elder Scrolls: Skyrim')
# hots = Game.create(title: 'Heroes of the Storm')
# retro = Game.create(title: 'Retro Gaming')
# ds2 = Game.create(title: 'Dark Souls 2')
# poe = Game.create(title: 'Path of Exiles')
# mgs4 = Game.create(title: 'Metal Gear Solid 4')
# epoch = Game.create(title: 'Last Epoch')
# atlas = Game.create(title: 'Atlas')
# fooddrink = Game.create(title: 'Food and Drink')
# lineage = Game.create(title: 'Lineage 2')
# chess = Game.create(title: 'Chess')
# farmsim = Game.create(title: 'Farming Simulator')
# ff14 = Game.create(title: 'Final Fantasy XIV')
# stadium = Game.create(title: 'Pokemon Stadium')
# gow = Game.create(title: 'God of War')
# sc2 = Game.create(title: 'Starcraft 2')
# undertale = Game.create(title: 'Undertale')
# mk11 = Game.create(title: 'Mortal Kombat 11')
# r6s = Game.create(title: 'Rainbow Six: Siege')
# jump = Game.create(title: 'Jump King')
# dbd = Game.create(title: 'Dead by Daylight')
# mtg = Game.create(title: 'Magic: The Gathering')
# daysgone = Game.create(title: 'Days Gone')
# ow = Game.create(title: 'Overwatch')
# fifa = Game.create(title: 'FIFA 2019')
# apex = Game.create(title: 'Apex Legends')
# dota = Game.create(title: 'Defenders of the Ancienct: 2')
# hearthstone = Game.create(title: 'Hearthstone')
# wow = Game.create(title: 'World of Warcraft')
# chatting = Game.create(title: 'Just Chatting')
# pubg = Game.create(title: 'PLAYERUNKNOWNS BATTLEGROUNDS')
# lol = Game.create(title: 'League of Legends')
# fortnite = Game.create(title: 'Fortnite')
# csgo = Game.create(title: 'Counter Strike: Global Offensive')
# rl = Game.create(title: 'Rocket League')
# h5 = Game.create(title: 'Halo 5')

