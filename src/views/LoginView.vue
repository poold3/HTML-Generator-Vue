<template>
    <div>
        <div class="row">
            <div class="block">
                <p class="blockTitle">Login</p>
                <p class="blockText">&#60;p&#62;Start where you left off!&#60;&#47;p&#62;</p>
                <form>
                    <input class="textInput" type="text" placeholder="placeholder=&quot;Username&quot;" required>
                    <input class="textInput" type="password" placeholder="Password" required>
                    <button class="submitButton" id="loginSubmit" type="submit" >Login</button>
                </form>
            </div>
            <div class="block">
                <p class="blockTitle">&#60;h1&#62;Register&#60;&#47;h1&#62;</p>
                <p class="blockText">Sign up today!</p>
                <form>
                    <input class="textInput" type="text" placeholder="Username" required>
                    <input class="textInput" type="password" placeholder="Password" required>
                    <input class="textInput" type="password" placeholder="placeholder=&quot;Confirm Password&quot;" required>
                    <input class="textInput" type="email" placeholder="Email" required>
                    <button class="submitButton" id="registerSubmit" type="submit">type=&#34;submit&#34;</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
.row {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.block {
    display: block;
    height: 450px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #048ABF;
    color: #F2F2F2;
}

@media only screen and (min-width: 901px) {
    .row {
        justify-content: space-around;
        flex-direction: row;
    }
    .block {
        width: 45%;
    }
}

@media only screen and (max-width: 900px) {
    .row {
        justify-content: center;
        flex-direction: column;
    }
    .block {
        width: 90%;
    }
}

.block-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.blockTitle {
    font-weight: bolder;
    font-size: 40px;
}

.blockText {
    font-weight: bold;
    font-size: 20px;
}

form {
    width: 80%;
    height: auto;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.textInput {
    width: 80%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
}

.submitButton {
    background-color: #037F8C;
    border-radius: 5px;
    color: #F2F2F2;
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition-duration: 0.3s;
}

#loginSubmit:hover{
    transform: scale(1.03);
    /* box-shadow: 1px 1px 15px 3px #818589; */
}

#registerSubmit:hover{
    transform: scale(1.03);
}
</style>