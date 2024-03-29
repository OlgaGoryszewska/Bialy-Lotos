:root {
    --black:#30302F;
    --beige:#E1D5C7;
    --grey:#F8F8F8;
    --white:#FFF;

}


@font-face {
    font-family:'Urbanist', sans-serif; 
    src: url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300&display=swap');
};

@font-face {
    font-family:'Urbanist', sans-serif; 
    src: url('https://fonts.googleapis.com/css2?family=Raleway&family=Reem+Kufi+Fun:wght@700&family=Urbanist:wght@600&display=swap');
  
};

@font-face {
    font-family: 'Playfair Display SC', serif;
    src: url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&display=swap');
};

@font-face {
    font-family: 'Playfair Display', serif;
    src: url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
};



@font-face {
    font-family: 'Poppins', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
};

@font-face {
    font-family: 'Poppins', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@700&display=swap');
    
};


html{
    margin: auto;
}


body{
    color:var(--beige);
    margin: auto;
    min-height: 100dvh;

}

a:hover {
    text-decoration: 1px underline;
    transition: 200s;
    
}

a:active,
a:focus {
    color: #706E6F;
}

h1,
p,
a,
h2,
h3{
    font-family:'Urbanist';
    color: var(--black);
    text-decoration: none;
    text-align: justify;
    
    
}




h1{
    font-size: 16px;
    padding-top: 7rem;
    padding-left: 2rem;
    padding-bottom: 0rem;

}

h2{
   font-weight: 600;
   font-size: 24px;
   text-align: left;
}

h3{
    text-align: left;
 }

#nameError,
#emailError,
#subjectError,
#messageError{
    color: red;
}



.bold-text{
    font-weight: 700;
 }

/* Menu bar */

.logo-img{
    position: absolute;
    top: 0.4rem;
    width: 75px;
    align-self: center;
    padding-bottom: 0.4rem;
    z-index: 1;


}

.hamburger{
    color: var(--black);
    align-self: flex-end;
    padding: 2rem;
    margin: 0;
    z-index: 2;
    


}

.menu-link {
    font-family:'Urbanist', sans-serif; 
    padding-top: 4rem;
    padding:1rem;
    font-size: 18px;
    font-weight: 500;
    transition: transform 0.3s ease-in-out;
    

}

.top-menu{
    display: none;

}

@media screen and (min-width:1099px) {

    .top-menu{
        display: flex;
        justify-content: flex-end;
        align-content: center;
        margin-top: 2rem;
        margin-right:2rem;
    }
        
    .hamburger{
        display: none;

    }

    header{
        flex-direction: row;
      }  
    
    }



.menu{
    display: none;
    

}


#checkbox{
    display: none;
}

#checkbox:checked ~ .menu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: 1;
    width: 100%;
    box-shadow: 0px 2px 6px 0px #0000001A;
    background-color: var(--grey);
    padding: 2rem;
    margin-top: 0rem;
    padding-top: 4rem;
   
  }  


header{
    display: flex;
    flex-direction: column;
    background-color: var(--beige);
    position:relative;
    height: 80px;
    box-shadow: 0px 2px 6px 0px #0000001A;
    z-index: 2;
    position: fixed;
    width: 100%;
    

  }  

.header-index{
    background-color: transparent;

}

 

main{
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--grey);
   


    }  

/* Home page */

.grid-item1{
    grid-template-columns: 1;

}
.grid-item2{
    grid-template-columns: 2;
}

.home-page-flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
}


.home-page-introduction-grid{

    margin-top: 7rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    justify-content: center;


}
.latest-post-h1{
    padding: 1rem;
}


.main-img-div{
    display: grid;
    position: relative;
    padding-top: 0rem;
    margin-bottom: -6rem;
    align-items: center;
    justify-items: center;

    }  

.main-img{
  object-fit: cover;
  max-width: 100%;
  min-height:60vh ;
  animation: slideIn 2s;
  align-self: center;
  justify-self: center;
  
  }  

  @media screen and (min-width:1016px) {
    

    .main-img-div{
    padding-top: 0rem;

    }

  
    }

  @keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}


.text-overlay{
  color: #FFF;
  text-align: center;
  font-family: Playfair Display SC;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  top: 75%;
  position: absolute;
  padding: 0.4rem;
  padding-right: 2rem;
  padding-left: 2rem;
  animation: fadeIn 2s;
  background-color: none;
  
}  

@media screen and (min-width:680px) {

    .text-overlay{
    top: 60%;
    font-size: 42px;

    }

  
    }

    @media screen and (min-width:880px) {

        .text-overlay{
        top: 60%;
        font-size: 52px;
        width:800px;
    
        }
    
      
        }
    


/* Footer*/

footer{
    background-color:var(--grey);
    display: flex;
    flex-direction: column;
    z-index: 1;
    border-top:1px solid #0000001A;
  }  

.logo-footer{
   width: 40px;
   padding: 2rem;
   align-self: center;
   
  }  
.coptrights,
.link-footer{
    align-self: center;
    padding: 0.5rem;
    font-size: 12px;
    
   } 


.coptrights{

    font-size: 10px;
    padding-top: 2rem;
    
   } 

/* Contact form*/



.background-img,
.contact-form,
.blog-specific-page-container,
.blog-page-container{
    font-family: 'Urbanist';
    color: var(--black);
    background-color: var(--white);
    margin: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    min-width: 100vp;


} 

#contact-form{
    display: flex;
    flex-direction: column;
}


.blog-specific-page-container{
    position: relative;

}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.modal-content {
    max-width: 80%;
    max-height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
    color: white;
}

label{
    font-family: 'Urbanist';
    color: var(--black);
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem ;

}

input[type="submit"] {
    margin-top: 4rem;
    margin-bottom: 2rem;
    width: 130px;
    height: 40px;
    background-color: var(--black);
    color: var(--white);
    border: 0;
    justify-self: center;
    align-self: center;
    font-size: 12px;
    font-family: 'Urbanist';
    border-radius: 0%;

}
input[type="text"],
input[type="email"],
textarea{
    
    border: 0;
    border-bottom: solid var(--black) 1px;
    height: 1.6rem;
    border-radius: 0%;
}

textarea{
    
    height: 6rem;
    border: solid 1px;
}

.background-img{
    background-image: url('../IMG/main-img.jpg');
    margin: 2rem;
    background-repeat: no-repeat;
    justify-self: center;
    align-self: center;
    justify-items: center;
    align-items: center;

}

.contact-form{
    background-color: var(--grey);
    margin: 0rem;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    min-width: 100vp;

} 

.header-contact-form{
    font-family:'Urbanist';
    font-weight: 700;
    font-size:25px ;
    line-height: 42px;
    
}



/* Blog Page*/

.main-blog-page{
    display: grid;
    grid-template-columns: 1fr;

}

@media screen and (min-width:600px) {

   
    .blog-page-container{
        display: grid;
        grid-template-columns: 1fr;
        max-width: 600px;
        justify-self: center;

    }
    .blog-specific-page-container{
        max-width: 600px;
        justify-self: center;
    }

   
    }

div.product > *{
   min-width: 100vp;
   display: flex;
   flex-direction: column;

} 

.product{
   display: flex;
   flex-direction: column;
    
 } 

 #load-more{
    text-decoration: underline;
    font-weight: bold;
    border: none;
    font-family: 'Urbanist';
    padding: 1rem;
    background-color: transparent;
    color: var(--black);

  } 


/* Last post carousel*/

.slider{
    display: none;
}

.horizontal-scrolling {
    margin-top: 1rem;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    white-space: nowrap;
    width: 100%;
    height: 250px;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    
    


}

    
.card-mobile-view{
    margin-right: 2rem;
    margin-top: 10px;
    margin: 0.5rem;
    flex: 0 0 auto;
    height: 100%;
    width: 200px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 25px;
    align-self: center;
    background-color: white;
    justify-content: flex-start; 
    transition: transform 100ms ease-in ;
    transform: translateX(0);
    margin: 0.5rem;
    align-self: center;
    justify-self: center;
    scroll-snap-align: start;
    text-align: center;

}



.mobile-view-title{
    font-size: 16px;
    color: --black;
    padding-top: 0rem;
    padding-left: 1rem;
    padding-bottom: 0rem;

}


@media screen and (min-width:800px) {

   
    .horizontal-scrolling{
        display: none;
        
    }
    .card-mobile-view{
        display: none;

    }
    .card,
    .slider-rail,
    .slider{
        display: block;
        box-sizing: border-box;
    
    }
    
    .slider{
        
        overflow: hidden;
        justify-content: center;
        
    
    }
    
    .slider-rail{
       
        display: flex;
        list-style: none;
        padding: 0;
        transition: transform 800ms ease;
        width: 850px;
    
    }
    
    .btn-wrapper{
        display: flex;
        justify-content: space-between;
        
    }
    
    
    .card{
        display: flex;
        flex-direction: column;
        flex: 0 0 33.333%;
        box-shadow: 0px 4px 4px 0px #00000040;
        border-radius: 25px;
        align-self: center;
        background-color: white;
        justify-content: flex-start; 
        transition: transform 100ms ease-in ;
        transform: translateX(0);
        margin: 0.5rem;
        align-self: center;
        justify-self: center;
       
    
    }
    
    .card-container{
        height: 230px;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding:1rem;
        
        
    }
    
    
    
    div .card .wp-block-heading{
        font-family: 'Urbanist';
        margin: 0rem;
        font-size: 18px;
        font-weight: 600;
    
    
    }
    
    .right-btn,
    .left-btn{
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        background-color: var(--grey); 
        text-decoration: none;
        color: var(--black);
    }
    
   
    }


/* About us styling */

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideDown {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.about-us-main-wrapper-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;

}

.about-us-main-wrapper{
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    max-width: 600px;
    align-content: center;
    justify-content: center;
    

}

.header-about-us{
    margin-top: 0;
    margin-bottom: 0rem;
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    align-self: center;
    font-weight: 600;
    animation: fadeIn 2s;
    text-align: center;

}

.content-about-us{
    padding-right: 3rem;
    padding-left: 3rem;
    font-family: 'Poppins', urbanist;
    font-size: 14px;
    font-weight: 400;
    animation: fadeIn 2s;
    text-align: center;
    color: var(--black);
    

}


.about-us-image{
    align-self: center;
    max-width: 70%;
    object-fit: cover;
    opacity: 0;
    transform: translateY(-20px);
    animation: slideDown 1s ease-out 0.5s forwards; 
    border-radius:15px;
    margin-bottom: 3rem;
    
}

@media screen and (min-width:800px) {

   
   .content-about-us{
    font-size: 20px;

   }
    }


   