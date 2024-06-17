<template>
    <div class="main-blog anim" style="--delay: 0.1s">
        <div class="main-blog__title">How to do Basic Jumping and how to landing safely</div>
        <div class="main-blog__author">
            <div class="author-img__wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                <img class="author-img" src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80">
            </div>
            <div class="author-detail">
                <div class="author-name">Thomas Hope</div>
                <div class="author-info">
                    53K views
                    <span class="seperate"></span>
                    2 weeks ago
                </div>
            </div>
        </div>
        <div class="main-blog__time">7 min</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.main-blog {
    background-image: url(https://assets.codepen.io/3364143/skate-removebg-preview.png);
    background-size: 80%;
    background-position-x: 150px;
    background-color: #31abbd;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 300px;
    padding: 30px;
    border-radius: 20px;
    align-self: stretch;
    overflow: hidden;
    position: relative;
    transition: background 0.3s;
    background-repeat: no-repeat;
    margin: 50px
}

.anim {
    animation: bottom 0.8s var(--delay) both;
}

.main-blog__title {
    font-size: 25px;
    max-width: 12ch;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 30px;
}
.main-blog__author {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
}

.main-blog__time {
    background: rgba(21, 13, 13, 0.44);
    color: #fff;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 6px;
    position: absolute;
    right: 20px;
    bottom: 20px;
}

.author-img__wrapper {
    position: relative;
    flex-shrink: 0;
}

.author-detail {
    margin-left: 16px;
}
</style>