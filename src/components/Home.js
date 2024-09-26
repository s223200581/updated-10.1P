import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';
import Footer from './Footer';
import NewsletterSignUp from './NewsletterSignUp'; // Import the Newsletter component

const Home = () => {
  return (
    <>
      <Container text>
        <Segment raised>
          <Header as="h2" textAlign="center">
            Welcome to DEV@Deakin
          </Header>
          <p>
            Explore and post your thoughts, ideas, and innovations. Please login to continue or sign up if you are new here.
          </p>
        </Segment>

        {/* Add the Newsletter SignUp component */}
        <NewsletterSignUp />
      </Container>

      {/* Add the Footer here */}
      <Footer />
    </>
  );
};

export default Home;
