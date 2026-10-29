import { Link } from "react-router-dom";

export default function Register() {
    return (  
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin"> 
            <div class="modal-dialog"> 
                <div class="modal-content rounded-4 shadow"> 
                    <div class="modal-header p-5 pb-4 border-bottom-0 d-flex justify-content-center"> 
                        <h1 class="fw-bold mb-0 fs-2">Register</h1>
                    </div> 
                    <div class="modal-body p-5 pt-0"> 
                        <form class=""> 
                            <div class="form-floating mb-3"> 
                                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/> 
                                <label for="floatingInput">Email address</label> 
                            </div> 
                            <div class="form-floating mb-3"> 
                                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password"/> 
                                <label for="floatingPassword">Password</label> 
                            </div> 
                                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button> 
                                <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small> 
                                <hr class="my-4"/> 
                                <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2> 
                                <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit"> 
                                    <svg class="bi me-1" width="16" height="16" aria-hidden="true" viewBox="0 0 128 128">
                                        <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"></path>
                                    </svg>
          
                                    Sign up with Google
                                </button> 
                                <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit"> 
                                    <svg class="bi me-1" width="16" height="16" aria-hidden="true" viewBox="0 0 128 128">
                                        <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                                    </svg>
                                    Sign up with Facebook
                                </button> 
                                <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit"> 
                                    <svg class="bi me-1" width="16" height="16" aria-hidden="true" viewBox="0 0 128 128">
                                        <path d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z" fill="#000" style={{strokeWidth: "104373"}}></path>
                                    </svg>
                                    Sign up with Twitter
                                </button> 
                        </form> 
                        <p> Do you have an account?<Link to="/auth/login"> Click here</Link></p>
                    </div> 
                </div>
            </div> 
        </div>
    )
}