import React from 'react';
import './index.css'

function ErrorPage404() {
    return (
        <div>
            <div class="mainbox">
                <div class="err">4</div>
                <i class="far fa-question-circle fa-spin"></i>
                <div class="err2">4</div>
                <div class="msg">¿Quizás esta página se movió? ¿Se eliminó? ¿Se esconde en la cuarentena? ¿Nunca existió en primer lugar?
                <p>Vamos a casa <a href="/#">home</a> e intentemos desde allí.</p></div>
            </div>
        </div>
    );
};

export {ErrorPage404};