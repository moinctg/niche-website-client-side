import React  from 'react';
import react, { useEffect, useState } from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

// import "./Dashboard.css";
import useAuth from "../../../hooks/useAuth";
import AddServices from "../AddServices/AddServices";
import ManageServices from "../ManageServices/ManageServices";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Review from "../Review/Review";
import MyBooking  from "../MyBookings/MyBookings";
import MangeOrder from "../MangeOrder/MangeOrder";
import ManageOrders from "../ManageOrders/ManageOrders";
import Payment from "../Payment/Payment";
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://sleepy-tor-93619.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
  return (

    <div>

      <div id="wrapper">
      
        {/* <div className="row">
          <div className="col-md-3 "> */}

<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


       <a class="sidebar-brand d-flex align-items-center justify-content-center" Link to="/deshboard">
         <div class="sidebar-brand-icon rotate-n-15">
           <i class="fas fa-laugh-wink"></i>
         </div>
         <div class="sidebar-brand-text mx-3">Dashboard <sup>2</sup></div>
       </a>


       <hr class="sidebar-divider my-0" />

    


       <li class="nav-item">
         <a class="nav-link collapsed"  data-toggle="collapse" data-target="#collapsePages"
           aria-expanded="true" aria-controls="collapsePages">
           <i class="fas fa-fw fa-folder"></i>
           <span>Pages</span>
         </a>
        
             <NavLink to={`${url}`}> 
                <li className="dashboard-menu  nav-link">Book</li>
              </NavLink>

              <NavLink to={`${url}/BookingList`}>
                <li className="dashboard-menu  nav-link ">Booking list</li>
              </NavLink>

              <NavLink to={`${url}/review`}>
                <li className="dashboard-menu nav-link">Review</li>
              </NavLink>
              <NavLink to={`${url}/payment`}>
                <li className="dashboard-menu nav-link">Payment</li>
              </NavLink>
              <NavLink to={`${url}/statusOrders`}>
                <li className="dashboard-menu   nav-link">status Order</li>
              </NavLink>
              <NavLink to={`${url}/ManageOrders`}>
                <li className="dashboard-menu nav-link">Manage Order</li>
              </NavLink>
              <div className="admin-dashboard">
                <li className="dashboard-menu  nav-link">Orders list</li>

                {isAdmin && (
                  <NavLink to={`${url}/addService`}>
                    <li className="dashboard-menu  nav-link">Add Service</li>
                  </NavLink>
                )}
                <NavLink to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu  nav-link">Make Admin</li>
                </NavLink>
                <NavLink to={`${url}/manageServices`}>
                  <li className="dashboard-menu  nav-link">Manage Service</li>
                </NavLink>
               
                </div>
                </li>
            
              


          
         
    


       <li class="nav-item">
         <a class="nav-link" href="charts.html">
           <i class="fas fa-fw fa-chart-area"></i>
           <span>Charts</span></a>
       </li>


       <li class="nav-item">
         <a class="nav-link" href="tables.html">
           <i class="fas fa-fw fa-table"></i>
           <span>Tables</span></a>
       </li>


       

     </ul>

     <div id="content-wrapper" class="d-flex flex-column">


       <div id="content">
     
             


         <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


           <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
             <i class="fa fa-bars"></i>
           </button>


           <form
             class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
             <div class="input-group">
               <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                 aria-label="Search" aria-describedby="basic-addon2" />
               <div class="input-group-append">
                 <button class="btn btn-primary" type="button">
                   <i class="fas fa-search fa-sm"></i>
                 </button>
               </div>
             </div>
           </form>


           <ul class="navbar-nav ml-auto">


             <li class="nav-item dropdown no-arrow d-sm-none">
               <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <i class="fas fa-search fa-fw"></i>
               </a>

               <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                 aria-labelledby="searchDropdown">
                 <form class="form-inline mr-auto w-100 navbar-search">
                   <div class="input-group">
                     <input type="text" class="form-control bg-light border-0 small"
                       placeholder="Search for..." aria-label="Search"
                       aria-describedby="basic-addon2" />
                     <div class="input-group-append">
                       <button class="btn btn-primary" type="button">
                         <i class="fas fa-search fa-sm"></i>
                       </button>
                     </div>
                   </div>
                 </form>
               </div>
             </li>


             

             <div class="topbar-divider d-none d-sm-block"></div>


             <li class="nav-item dropdown no-arrow">
               <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                 <img class="img-profile rounded-circle"
                   src="img/undraw_profile.svg" />
               </a>

               <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                 aria-labelledby="userDropdown">
                 <a class="dropdown-item" href="#">
                   <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                   Profile
                 </a>
                 <a class="dropdown-item" href="#">
                   <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                   Settings
                 </a>
                 <a class="dropdown-item" href="#">
                   <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                   Activity Log
                 </a>
                 <div class="dropdown-divider"></div>
                 <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                   <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                   Logout
                 </a>
               </div>
             </li>

           </ul>

         </nav>


         {/* {/* <div class="container-fluid">




           <div class="row">


             <div class="col-xl-3 col-md-6 mb-4">
               <div class="card border-left-primary shadow h-100 py-2">
                 <div class="card-body">
                   <div class="row no-gutters align-items-center">
                     <div class="col mr-2">
                       <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                         Earnings (Monthly)</div>
                       <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                     </div>
                     <div class="col-auto">
                       <i class="fas fa-calendar fa-2x text-gray-300"></i>
                     </div>
                   </div>
                 </div>
               </div>
             </div>


             <div class="col-xl-3 col-md-6 mb-4">
               <div class="card border-left-success shadow h-100 py-2">
                 <div class="card-body">
                   <div class="row no-gutters align-items-center">
                     <div class="col mr-2">
                       <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                         Earnings (Annual)</div>
                       <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                     </div>
                     <div class="col-auto">
                       <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                     </div>
                   </div>
                 </div>
               </div>
             </div>


             <div class="col-xl-3 col-md-6 mb-4">
               <div class="card border-left-info shadow h-100 py-2">
                 <div class="card-body">
                   <div class="row no-gutters align-items-center">
                     <div class="col mr-2">
                       <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                       </div>
                       <div class="row no-gutters align-items-center">
                         <div class="col-auto">
                           <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                         </div>
                         <div class="col">
                           <div class="progress progress-sm mr-2">
                             <div class="progress-bar bg-info" role="progressbar"
                               style={{width: '50%' }}></div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div class="col-auto">
                       <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                     </div>
                   </div>
                 </div>
               </div>
             </div>


             <div class="col-xl-3 col-md-6 mb-4">
               <div class="card border-left-warning shadow h-100 py-2">
                 <div class="card-body">
                   <div class="row no-gutters align-items-center">
                     <div class="col mr-2">
                       <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                         Pending Requests</div>
                       <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                     </div>
                     <div class="col-auto">
                       <i class="fas fa-comments fa-2x text-gray-300"></i>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>



           <div class="row">


             <div class="col-xl-8 col-lg-7">
               <div class="card shadow mb-4">

                 <div
                   class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                   <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                   <div class="dropdown no-arrow">
                     <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                     </a>
                     <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                       aria-labelledby="dropdownMenuLink">
                       <div class="dropdown-header">Dropdown Header:</div>
                       <a class="dropdown-item" href="#">Action</a>
                       <a class="dropdown-item" href="#">Another action</a>
                       <div class="dropdown-divider"></div>
                       <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                   </div>
                 </div>

                 <div class="card-body">
                   <div class="chart-area">
                     <canvas id="myAreaChart"></canvas>
                   </div>
                 </div>
               </div>
             </div>


             <div class="col-xl-4 col-lg-5">
               <div class="card shadow mb-4">

                 <div
                   class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                   <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                   <div class="dropdown no-arrow">
                     <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                     </a>
                     <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                       aria-labelledby="dropdownMenuLink">
                       <div class="dropdown-header">Dropdown Header:</div>
                       <a class="dropdown-item" href="#">Action</a>
                       <a class="dropdown-item" href="#">Another action</a>
                       <div class="dropdown-divider"></div>
                       <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                   </div>
                 </div>

                 <div class="card-body">
                   <div class="chart-pie pt-4 pb-2">
                     <canvas id="myPieChart"></canvas>
                   </div>
                   <div class="mt-4 text-center small">
                     <span class="mr-2">
                       <i class="fas fa-circle text-primary"></i> Direct
                     </span>
                     <span class="mr-2">
                       <i class="fas fa-circle text-success"></i> Social
                     </span>
                     <span class="mr-2">
                       <i class="fas fa-circle text-info"></i> Referral
                     </span>
                   </div>
                 </div>
               </div>
             </div>
           </div> */}

            <Switch>
              <Route exact path={path}>
                <MyBooking></MyBooking>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/BookingList`}>
                <MyBooking></MyBooking>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>

              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>

              <Route path={`${path}/statusOrders`}>
                <MangeOrder></MangeOrder>
              </Route>
              <Route path={`${path}/manageOrders`}>
                <ManageOrders></ManageOrders>
              </Route>


              <Route path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>

              <Route path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route>
            </Switch>


           {/* <div class="row"> */}


             {/* <div class="col-lg-6 mb-4">



               <div class="card shadow mb-4">
                 <div class="card-header py-3">
                   <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                 </div>
                 <div class="card-body">
                   <h4 class="small font-weight-bold">Server Migration <span
                     class="float-right">20%</span></h4>
                   <div class="progress mb-4">
                     <div class="progress-bar bg-danger" role="progressbar" style={{ width: '20%'
                     }}></div>
                   </div>
                   <h4 class="small font-weight-bold">Sales Tracking <span
                     class="float-right">40%</span></h4>
                   <div class="progress mb-4">
                     <div class="progress-bar bg-warning" role="progressbar" style= {{ width: '40%'
                     }}></div>
                   </div>
                   <h4 class="small font-weight-bold">Customer Database <span
                     class="float-right">60%</span></h4>
                   <div class="progress mb-4">
                     <div class="progress-bar" role="progressbar" style= {{width: '60%'
                       }}></div>
                   </div>
                   <h4 class="small font-weight-bold">Payout Details <span
                     class="float-right">80%</span></h4>
                   <div class="progress mb-4">
                     <div class="progress-bar bg-info" role="progressbar" style= {{ width: '80%'
                       }}></div>
                   </div>
                   <h4 class="small font-weight-bold">Account Setup <span
                     class="float-right">Complete!</span></h4>
                   <div class="progress">
                     <div class="progress-bar bg-success" role="progressbar" style= {{width: '100%'}} ></div>
                   </div>
                 </div>
               </div>


               <div class="row">
                 <div class="col-lg-6 mb-4">
                   <div class="card bg-primary text-white shadow">
                     <div class="card-body">
                       Primary
                       <div class="text-white-50 small">#4e73df</div>
                     </div>
                   </div>
                 </div>
                 <div class="col-lg-6 mb-4">
                   <div class="card bg-success text-white shadow">
                     <div class="card-body">
                       Success
                       <div class="text-white-50 small">#1cc88a</div>
                     </div>
                   </div>
                 </div>
                 <div class="col-lg-6 mb-4">
                   <div class="card bg-info text-white shadow">
                     <div class="card-body">
                       Info
                       <div class="text-white-50 small">#36b9cc</div>
                     </div>
                   </div>
                 </div>
                 <div class="col-lg-6 mb-4">
                   <div class="card bg-warning text-white shadow">
                     <div class="card-body">
                       Warning
                       <div class="text-white-50 small">#f6c23e</div>
                     </div>
                   </div>
                 </div>
                 <div class="col-lg-6 mb-4">
                   <div class="card bg-danger text-white shadow">
                     <div class="card-body">
                       Danger
                       <div class="text-white-50 small">#e74a3b</div>
                     </div>
                   </div>
                 </div>
                 <div class="col-lg-6 mb-4">
                   <div class="card bg-secondary text-white shadow">
                     <div class="card-body">
                       Secondary
                       <div class="text-white-50 small">#858796</div>
                     </div>
                   </div>
                 </div>
                 <div class="col-lg-6 mb-4">
                   <div class="card bg-light text-black shadow">
                     <div class="card-body">
                       Light
                       <div class="text-black-50 small">#f8f9fc</div>
                     </div>
                   </div>
                 </div>
                 <div class="col-lg-6 mb-4">
                   <div class="card bg-dark text-white shadow">
                     <div class="card-body">
                       Dark
                       <div class="text-white-50 small">#5a5c69</div>
                     </div>
                   </div>
                 </div>
               </div>

             </div>

             <div class="col-lg-6 mb-4">


               <div class="card shadow mb-4">
                 <div class="card-header py-3">
                   <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                 </div>
                 <div class="card-body">
                   <div class="text-center">
                     <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }}
                       src="img/undraw_posting_photo.svg" alt="..." />
                   </div>
                   <p>Add some quality, svg illustrations to your project courtesy of <a
                     target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                     constantly updated collection of beautiful svg images that you can use
                     completely free and without attribution!</p>
                   <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                     unDraw &rarr;</a>
                 </div>
               </div>


               <div class="card shadow mb-4">
                 <div class="card-header py-3">
                   <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                 </div>
                 <div class="card-body">
                   <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                     CSS bloat and poor page performance. Custom CSS classes are used to create
                     custom components and custom utility classes.</p>
                   <p class="mb-0">Before working with this theme, you should become familiar with the
                     Bootstrap framework, especially the utility classes.</p>
                 </div>
               </div>

             </div>
           </div> */}
{/* 
         </div>

       </div> */} 



       


     </div>




     <a class="scroll-to-top rounded" href="#page-top">
       <i class="fas fa-angle-up"></i>
     </a>


     <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
             <button class="close" type="button" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">×</span>
             </button>
           </div>
           <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
           <div class="modal-footer">
             <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
             <a class="btn btn-primary" href="login.html">Logout</a>
           </div>
         </div>
       </div>

    </div>

     </div>
     </div>
     </div>
    
   

  

   );
};

          export default Dashbaord;
    
