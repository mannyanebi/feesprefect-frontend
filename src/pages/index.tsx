import Container from 'components/atoms/a-container';
import HomepageContent from 'components/molecules/m-homepage-content';
import NavBar from 'components/molecules/m-navbar';
import React from 'react';

function Home() {
    return (
        <Container className="p-[2rem]">
            <NavBar />
            <HomepageContent />
        </Container>
    );
}

export default Home;
