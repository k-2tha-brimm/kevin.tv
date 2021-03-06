# Kevin.Tv
An homage to the days of Justin.tv, Kevin.Tv is a clone of the popular online streaming platform Twitch.tv. Built over the course of two weeks, the project leverages Ruby on Rails to build out the backend web API, while taking advantage of React/Redux to create the frontend components.

## Running Kevin.Tv
From within the root directory:
```
npm install
bundle install
```
You will need to run both
```
npm start
rails s
```
in two separate terminal windows in order to navigate to the site. Then you can navigate to the site at your localhost:3000.

## User Login/Signup
Login and signup are handled through an interactive modal, which is only accessible when a user is not currently logged in. There is a route to this modal for a logged out user in both the navigation bar, as well as the left hand bar.

There is a default demo user account that users can use to browse the site if they do not wish to signup themselves. See a short demo of the signup experience below.

![Alternative Text](./app/assets/images/NEWNEW.gif)

## Games & Streamers Directories
Once logged in, users can browse games that currently have live streams, and from there, explore the streamers that are currently playing those games and click onto their channel.

![Game Directory](./app/assets/images/games-directory.png)
![Streamer Directory](./app/assets/images/streamers-directory.png)
![Streamer Channel](./app/assets/images/streamer-channel.png)

## User Profiles and Avatar Upload
Each user has access to a personal profile page where they can add an avatar. Accessible from the drop-down menu in the navigation bar, users cannot edit one another's profiles, a precaution ensured by implementing Auth Routes with React Router.

You can see from the screenshot below, that Username and Bio editing is a feature that is currently in the works. This section will be expanded when it is live.

![Profile Page](./app/assets/images/settings.png)

## Video Upload, Edit, and Deletion
Users are able to access and browse all videos that have been uploaded by all other streamers. However, users can only perform CRUD operations on videos that they themselves have uploaded.

Users will also be allowed to edit their stream title and what game they are playing from their channel page. This edit button is currently in place, but will only appear when a user is viewing their own channel.

## What does the future hold?
Over the next couple of weeks, the goal of Kevin.Tv is to complete deployment to a production environment, and to finish implementing full CRUD functionality for the user video portion of the page.

Immediately after that, Following will be implemented, with live chat being the final MVP for this project.

## Code Snippets and Highlights
One of the most challenging parts of this project was just dealing with the amount of pages and routes that it required. Users can browse featured content or full game directories. From there each game has streamers, each streamer has a channel, each channel has videos, and each user has the ability to edit their avatars, videos and channels.

Keeping organized routes on both the front and back end was crucial to the success of this project.

```
    ~./frontend/components/app.js
        <Switch>
            <Route exact path="/directory" component={GamesIndexContainer} />
            <Route exact path="/directory/:gameId" component={StreamerIndexContainer} />
            <Route exact path="/channel/:userId" component={StreamerChannelContainer} />
            <Route exact path="/channel/:userId/videos" component={StreamerVideo} />
            <ProtectedRoute exact path="/channel/:userId/settings" component={UserSettings}/>
            <Route path="/" component={Jumbotron} />
        </Switch>
```
As you can see from the above, the project eventually came to encompass several separate components. State management became key to reducing load times, and a lot of time was spent determining the best way to access information within the front end views.