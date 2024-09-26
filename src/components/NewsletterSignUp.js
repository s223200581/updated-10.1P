import React, { useState } from 'react';
import { Button, Input, Segment, Grid, List, Icon } from 'semantic-ui-react';

const NewsletterSignUp = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.text())
        .then((message) => {
          alert(message);
          setEmail(''); // Clear the input field after successful subscription
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error subscribing. Please try again.');
        });
    } else {
      alert('Please enter a valid email');
    }
  };

  return (
    <div style={{ marginBottom: '5em' }}>
      {/* Newsletter Subscription Section */}
      <Segment
        textAlign="center"
        style={{
          padding: '2em',
          backgroundColor: '#E0E0E0',
          borderRadius: '5px',
        }}
      >
        <h3 style={{ display: 'inline-block', marginRight: '1em' }}>
          SIGN UP FOR OUR DAILY INSIDER
        </h3>

        {/* Email input and Subscribe button in the same row */}
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginRight: '1em',
            padding: '10px',
            width: '300px',
          }}
        />

        <Button
          onClick={handleSubscribe}
          color="grey"
          style={{ padding: '10px 20px' }}
        >
          Subscribe
        </Button>
      </Segment>

      {/* Explore, Support, and Social Media Links */}
      <Segment inverted vertical style={{ backgroundColor: '#006666', padding: '3em 0' }}>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <h4>Explore</h4>
              <List link inverted>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">Questions</List.Item>
                <List.Item as="a">Articles</List.Item>
                <List.Item as="a">Tutorials</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <h4>Support</h4>
              <List link inverted>
                <List.Item as="a">FAQs</List.Item>
                <List.Item as="a">Help</List.Item>
                <List.Item as="a">Contact Us</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <h4>Stay connected</h4>
              <List horizontal>
                <List.Item>
                  <Icon name="facebook" size="large" link />
                </List.Item>
                <List.Item>
                  <Icon name="twitter" size="large" link />
                </List.Item>
                <List.Item>
                  <Icon name="instagram" size="large" link />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* Footer content with contact number inside the wireframe */}
      <Segment inverted vertical textAlign="center" style={{ padding: '2em 0', backgroundColor: '#006666' }}>
        <p>
          Contact: 123456789 | <a href="#">Privacy Policy</a> | <a href="#">Terms</a> | <a href="#">Code of Conduct</a>
        </p>
      </Segment>
    </div>
  );
};

export default NewsletterSignUp;
