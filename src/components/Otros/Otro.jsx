import React from 'react';

const Otro = () => {
    return (
        <div>
            <div class="d-flex d-flex justify-content-center vh-100">


                <div class="bg-dark text-white col-md-6 d-flex d-flex justify-content-center align-items-center">
                    <div class="">
                        <h1>Texto izquierda</h1>
                    </div>
                </div>

                <div class="bg-light col-md-6 d-flex d-flex justify-content-center align-items-center">
                    <div class="">
                        <form action="" method="post">
                            <div class="mb-3">
                                <input type="email" class="form-control" name="email" required autocomplete="off" placeholder="Email" />
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" name="pass" required placeholder="Password" />
                            </div>
                            <button type="submit" name="signin" class="btn btn-primary">Sign In</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Otro;