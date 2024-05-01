import './dashboard.css';
import './dashboard1.css'


function Dashboard() {
  return (
    <div className="App">
      <header> 
        <div class="logosec"> 
              <div class="logo">Fridge Fiesta</div> 
              <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                  class="icn menuicn" 
                  id="menuicn" 
  alt="menu-icon"/>
          </div> 
    
          <div class="searchbar"> 
              <input type="text" 
                    placeholder="Search"/>
              <div class="searchbtn"> 
                <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                      class="icn srchicn" 
alt="search-icon"/>
                </div> 
          </div> 
    
          <div class="message"> 
              <div class="circle"></div> 
              <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png" 
                  class="icn" 
                  alt=""/> 
              <div class="dp"> 
                <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                      class="dpicn" 
                      alt="dp"/> 
                </div> 
          </div> 
    
      </header> 
  
      <div class="main-container"> 
          <div class="navcontainer"> 
              <nav class="nav"> 
                  <div class="nav-upper-options"> 
                      <div class="nav-option option1"> 
                          <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                              class="nav-img" 
                              alt="dashboard"/>
                          <h3> Dashboard</h3> 
                      </div>  
    
                      <div class="nav-option option3"> 
                          <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                              class="nav-img" 
                              alt="report"/> 
                          <h3> Report</h3> 
                      </div>  
    
                      <div class="nav-option option5"> 
                          <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                              class="nav-img" 
                              alt="blog"/> 
                          <h3> Profile</h3> 
                      </div> 
    
                      <div class="nav-option option6"> 
                          <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                              class="nav-img" 
                              alt="settings"/>
                          <h3> Settings</h3> 
                      </div> 
    
                      <div class="nav-option logout"> 
                          <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                              class="nav-img" 
                              alt="logout"/>
                          <h3>Logout</h3> 
                      </div> 
    
                  </div> 
              </nav> 
          </div> 
          <div class="main"> 
    
              <div class="searchbar2"> 
                  <input type="text" 
                        name="" 
                        id="" 
                        placeholder="Search"/> 
                  <div class="searchbtn"> 
                    <img src= 
  "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                          class="icn srchicn" 
                          alt="search-button"/> 
                    </div> 
              </div> 
    
              <div class="box-container"> 
    
                  <div class="box box1"> 
                      <div class="text"> 
                          <h2 class="topic-heading">Add Recipe</h2>  
                      </div> 
    
                      <img src= 
  "https://media.istockphoto.com/id/1332339349/vector/click-to-add-icon.jpg?s=612x612&w=0&k=20&c=AV2zlEaC7W4NrSxFfjK9w6etv_iHdeZecIBGZ1KFies="
                          alt="Views"/> 
                  </div> 
    
                  <div class="box box2"> 
                      <div class="text"> 
                          <h2 class="topic-heading">Recipe History</h2>  
                      </div> 
    
                      <img src= 
  "https://i.pinimg.com/736x/2d/97/c2/2d97c286543169d957da1b7d771d6a17.jpg" 
                          alt="likes"/>
                  </div> 
    
                  <div class="box box3"> 
                      <div class="text"> 
                          <h2 class="topic-heading">Review History</h2>  
                      </div> 
    
                      <img src= 
  "https://previews.123rf.com/images/valentint/valentint1612/valentint161202239/67225102-history-icon-black-website-button-on-white-background.jpg"
                          alt="Review"/>
                  </div> 
    
                  <div class="box box4"> 
                      <div class="text"> 
                          <h2 class="topic-heading">Contribute</h2> 
                      </div> 
    
                      <img src= 
  "https://www.shutterstock.com/image-vector/dollar-sign-icon-black-circle-600nw-518124334.jpg" alt="Contribute"/>
                  </div> 

                  <div class="box box5"> 
                      <div class="text"> 
                          <h2 class="topic-heading">Recipe Correction</h2> 
                      </div> 
    
                      <img src= 
  "https://cdn3.vectorstock.com/i/1000x1000/66/27/pencil-icon-black-on-white-background-vector-9076627.jpgttps://static.vecteezy.com/system/resources/previews/009/337/271/large_2x/pencil-icon-in-black-vector-image-illustration-of-pencil-in-black-on-white-background-a-pen-design-on-a-white-background-photo.jpg" alt="Corection"/>
                  </div>

                  <div class="box box6"> 
                      <div class="text"> 
                          <h2 class="topic-heading">Refer Friend</h2> 
                      </div> 
    
                      <img src= 
  "https://static.vecteezy.com/system/resources/previews/023/658/714/non_2x/referrals-icon-simple-solid-style-reference-friend-refer-communication-people-business-concept-black-silhouette-glyph-symbol-symbol-illustration-isolated-on-white-background-eps-10-vector.jpg" alt="Refer"/>
                  </div>

                  <div class="box box7"> 
                      <div class="text"> 
                          <h2 class="topic-heading">24x7 Customer Support</h2> 
                      </div> 
    
                      <img src= 
  "https://thumbs.dreamstime.com/b/customer-service-icon-vector-sign-symbol-isolated-white-b-customer-service-icon-vector-isolated-white-background-133765117.jpg" alt="Support"/>
                  </div>

                  <div class="box box8"> 
                      <div class="text"> 
                          <h2 class="topic-heading">Settings</h2> 
                      </div> 
    
                      <img src= 
  "https://c8.alamy.com/comp/2FM4AF3/settings-gear-icon-linear-symbol-vector-isolated-on-white-background-2FM4AF3.jpg" alt="Settings"/>
                  </div>

              </div>  
          </div> 
      </div>


    </div>
  );
}

export default Dashboard;
