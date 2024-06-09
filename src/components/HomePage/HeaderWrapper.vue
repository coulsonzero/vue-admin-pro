<template>
  <div class="app-header-right">
        <button class="mode-switch" title="Switch Theme">
            <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
        </button>
        <button class="add-btn" title="Add New Project">
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </button>
        <button class="notification-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
        </button>
        <button class="profile-btn">
            <!-- <img src="https://assets.codepen.io/3306515/IMG_2025.jpg"> -->
            <img class="user-img" src="https://images.unsplash.com/photo-1587918842454-870dbd18261a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=943&amp;q=80" alt="">
            <span>Shville</span>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.app-header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 30px;
}
.app-header-right button {
    margin: 8px;
}
.profile-btn {
    padding: 0;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding-left: 12px;
    border-left: 2px solid #ddd;
}

.profile-btn img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 4px;
}

.mode-switch, .notification-btn {
    background: transparent;
    border: none;
}
.add-btn {
    color: #fff;
    background-color: #323232;
    padding: 0;
    border: 0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-btn span {
    color: var(--main-color);
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    padding: 0 16px;
    letter-spacing: 1.6px;
}
</style>