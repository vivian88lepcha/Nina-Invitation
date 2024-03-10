import React from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import Error from '../../components/404'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar'

const StoryPage = (props) => {

    return (
        <div>
            <Navbar2/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default StoryPage;


