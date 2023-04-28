import React from "react";

const Footer = () => {

  return (

<div class="bg-gray-900 footer">
    <div class="max-w-2xl mx-auto text-white py-10">
        <div class="">
        <div class="">
                <span class="px-2">Home</span>
                <span class="px-2 border-l">Terms and Conditions</span>
                <span class="px-2 border-l">Privacy Policy</span>
                <span class="px-2 border-l">Colection Stament</span>
                <span class="px-2 border-l">Help</span>
                <span class="px-2 border-l">Manage Account</span>
            </div>   
            <div class="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p class=" md:order-1 md:mt-0"> Copyright © 2018 DEMO Streaming. All Rights Reserved.</p>
        </div>     
            <div class="flex justify-center my-10">
                <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"></img>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8"></img>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Footer;
