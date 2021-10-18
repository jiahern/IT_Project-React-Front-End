import React, { Component } from "react";
import "./Loading.css"

export default function Loading () {
        return (
          <div class = "loading">
  
            <span class = "loadingLogo"><svg width="150" height="150" viewBox="0 0 319 312" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M246.7 69.7999C246.7 65.4423 243.157 61.8997 238.8 61.8997C234.442 61.8997 230.9 65.4428 230.9 69.7999C230.9 74.1574 234.443 77.7 238.8 77.7C243.157 77.7 246.7 74.1574 246.7 69.7999ZM224.5 69.7999C224.5 61.914 230.914 55.5 238.8 55.5C246.686 55.5 253.1 61.914 253.1 69.7999C253.1 77.6861 246.686 84.0997 238.8 84.0997C230.914 84.0997 224.5 77.6857 224.5 69.7999Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M0.5 223.8C0.5 215.914 6.91403 209.5 14.7999 209.5C22.6861 209.5 29.0997 215.914 29.0997 223.8C29.0997 231.686 22.6861 238.1 14.7999 238.1C6.91403 238.1 0.5 231.686 0.5 223.8ZM6.89971 223.8C6.89971 228.157 10.4427 231.7 14.7999 231.7C19.1574 231.7 22.7 228.157 22.7 223.8C22.7 219.442 19.157 215.9 14.7999 215.9C10.4423 215.9 6.89971 219.442 6.89971 223.8Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M175.5 166.8C175.5 158.914 181.914 152.5 189.8 152.5C197.686 152.5 204.1 158.914 204.1 166.8C204.1 174.686 197.686 181.1 189.8 181.1C181.914 181.1 175.5 174.686 175.5 166.8ZM181.9 166.8C181.9 171.157 185.443 174.7 189.8 174.7C194.157 174.7 197.7 171.157 197.7 166.8C197.7 162.442 194.157 158.9 189.8 158.9C185.442 158.9 181.9 162.443 181.9 166.8Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M237.5 161.7C237.5 139.536 255.536 121.5 277.7 121.5C299.865 121.5 317.9 139.536 317.9 161.7C317.9 183.865 299.865 201.9 277.7 201.9C255.536 201.9 237.5 183.865 237.5 161.7ZM243.9 161.7C243.9 180.339 259.061 195.5 277.7 195.5C296.339 195.5 311.5 180.339 311.5 161.7C311.5 143.06 296.339 127.9 277.7 127.9C259.061 127.9 243.9 143.06 243.9 161.7Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M261.3 151.8C261.3 143.914 267.714 137.5 275.6 137.5C283.486 137.5 289.9 143.914 289.9 151.8C289.9 159.686 283.486 166.1 275.6 166.1C267.714 166.1 261.3 159.686 261.3 151.8ZM267.7 151.8C267.7 156.157 271.243 159.7 275.6 159.7C279.957 159.7 283.5 156.157 283.5 151.8C283.5 147.442 279.957 143.9 275.6 143.9C271.242 143.9 267.7 147.443 267.7 151.8Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M296.304 195.68H296.303C290.178 199.225 283.227 201.1 276.2 201.1C269.173 201.1 262.223 199.225 256.097 195.68C255.108 195.107 254.5 194.051 254.5 192.909V183.155C254.5 177.295 259.406 172.5 265.466 172.5H286.934C292.994 172.5 297.9 177.295 297.9 183.159V192.913C297.9 194.052 297.292 195.111 296.304 195.68ZM291.223 191.151C291.402 191.062 291.508 190.876 291.499 190.682V183.159C291.499 180.775 289.414 178.9 286.933 178.9H265.466C262.985 178.9 260.9 180.775 260.9 183.159V190.703C260.9 190.893 261.007 191.066 261.177 191.151C270.527 195.809 281.873 195.809 291.223 191.151Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M130.6 270.7C130.6 248.536 148.635 230.5 170.8 230.5C192.964 230.5 211 248.535 211 270.7C211 292.864 192.964 310.9 170.8 310.9C148.635 310.9 130.6 292.865 130.6 270.7ZM137 270.7C137 289.339 152.161 304.5 170.8 304.5C189.439 304.5 204.6 289.339 204.6 270.7C204.6 252.06 189.439 236.9 170.8 236.9C152.161 236.9 137 252.06 137 270.7Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M156.5 259.6C156.5 251.714 162.914 245.3 170.8 245.3C178.686 245.3 185.1 251.714 185.1 259.6C185.1 267.485 178.686 273.9 170.8 273.9C162.914 273.9 156.5 267.486 156.5 259.6ZM162.9 259.6C162.9 263.957 166.443 267.5 170.8 267.5C175.157 267.5 178.7 263.957 178.7 259.6C178.7 255.242 175.157 251.7 170.8 251.7C166.442 251.7 162.9 255.243 162.9 259.6Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M190.904 305.48H190.903C184.778 309.025 177.827 310.9 170.8 310.9C163.773 310.9 156.823 309.025 150.697 305.48C149.708 304.907 149.1 303.851 149.1 302.709V292.955C149.1 287.095 154.007 282.3 160.066 282.3H181.534C187.594 282.3 192.5 287.095 192.5 292.959V302.712C192.5 303.852 191.892 304.911 190.904 305.48ZM185.823 300.951C186.002 300.862 186.108 300.676 186.1 300.482V292.959C186.1 290.575 184.014 288.7 181.533 288.7H160.066C157.585 288.7 155.5 290.575 155.5 292.959V300.503C155.5 300.693 155.607 300.866 155.777 300.951C165.127 305.609 176.473 305.609 185.823 300.951Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M23.1742 163.08C24.0862 140.934 42.8486 123.656 64.9944 124.568C87.1397 125.48 104.418 144.242 103.506 166.388C102.594 188.534 83.8319 205.812 61.6862 204.9C39.5404 203.988 22.2622 185.226 23.1742 163.08ZM29.5689 163.343C28.8019 181.967 43.326 197.738 61.9495 198.505C80.573 199.272 96.3447 184.748 97.1116 166.125C97.8786 147.501 83.3545 131.729 64.731 130.963C46.1075 130.196 30.3358 144.72 29.5689 163.343Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M49.5094 153.055C49.8338 145.176 56.5059 139.031 64.3855 139.356C72.2646 139.68 78.4093 146.353 78.0849 154.232C77.7604 162.111 71.0883 168.256 63.2087 167.931C55.3296 167.607 49.1849 160.934 49.5094 153.055ZM55.9037 153.318C55.7244 157.672 59.1186 161.358 63.472 161.537C67.8255 161.716 71.5113 158.322 71.6906 153.968C71.8699 149.615 68.4756 145.929 64.1222 145.75C59.7683 145.571 56.083 148.964 55.9037 153.318Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M81.9964 200.312H81.9955C75.7291 203.602 68.7069 205.189 61.6862 204.9C54.6656 204.611 47.7978 202.452 41.8232 198.658C40.8586 198.045 40.2946 196.964 40.3416 195.823L40.743 186.078C40.9841 180.222 46.0837 175.633 52.1385 175.883L73.5875 176.766C79.6422 177.015 84.3473 182.008 84.106 187.867L83.7047 197.612C83.6579 198.751 83.0064 199.784 81.9964 200.312ZM77.1057 195.578C77.2885 195.496 77.4019 195.315 77.4014 195.12L77.7109 187.604C77.809 185.222 75.8023 183.263 73.3238 183.161L51.8747 182.277C49.3962 182.175 47.2352 183.963 47.1371 186.345L46.8267 193.883C46.8189 194.072 46.9189 194.25 47.0851 194.341C56.2354 199.38 67.5724 199.847 77.1057 195.578Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M119.5 40.7001C119.5 18.5356 137.536 0.5 159.7 0.5C181.864 0.5 199.9 18.5356 199.9 40.7001C199.9 62.8646 181.865 80.9003 159.7 80.9003C137.536 80.9003 119.5 62.8646 119.5 40.7001ZM125.9 40.7001C125.9 59.3394 141.061 74.5001 159.7 74.5001C178.339 74.5001 193.5 59.3394 193.5 40.7001C193.5 22.0609 178.339 6.90014 159.7 6.90014C141.061 6.90014 125.9 22.0609 125.9 40.7001Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M167.6 29.5997C167.6 25.2421 164.058 21.6995 159.7 21.6995C155.343 21.6995 151.8 25.2426 151.8 29.5997C151.8 33.9572 155.343 37.4998 159.7 37.4998C164.057 37.4998 167.6 33.9572 167.6 29.5997ZM145.4 29.5997C145.4 21.7138 151.814 15.2998 159.7 15.2998C167.586 15.2998 174 21.7142 174 29.6001C174 37.4859 167.586 43.8995 159.7 43.8995C151.814 43.8995 145.4 37.4855 145.4 29.5997Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M178.304 74.6797L178.303 74.6803C172.178 78.2254 165.227 80.1001 158.2 80.1001C151.173 80.1001 144.223 78.2255 138.097 74.6804C137.108 74.1074 136.5 73.0513 136.5 71.9087V62.1555C136.5 56.2952 141.406 51.5 147.466 51.5H168.934C174.993 51.5 179.9 56.2947 179.9 62.1594V71.9127C179.9 73.0518 179.292 74.1109 178.304 74.6797ZM173.223 70.151C173.402 70.0618 173.508 69.8763 173.499 69.682V62.1594C173.499 59.7749 171.414 57.9001 168.933 57.9001H147.466C144.985 57.9001 142.9 59.7749 142.9 62.1594V69.7035C142.9 69.8931 143.007 70.0665 143.177 70.151C152.527 74.8088 163.873 74.8088 173.223 70.151Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M128.14 52.1323C88.5 71.0002 71 98.5002 65 126.5" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
<path d="M209 271.5C250.5 258 268 240.5 275 197" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
<path d="M136.329 273.792C88 265.5 69.6714 226.208 66.5 204" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
<path d="M197 49.4517C213.373 51.3037 225.841 55.4816 235.459 62.3422" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
<path d="M245 167H201" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
<path d="M42.7539 192.095L20.7539 217.095" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
</svg>
</span>
            <span class = "loadingLogo1"><svg width="80" height="80" viewBox="0 0 128 168" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.5 49C36.5 39.901 43.9 32.5 53 32.5C62.1 32.5 69.5 39.901 69.5 49C69.5 58.099 62.1 65.5 53 65.5C43.901 65.5 36.5 58.1 36.5 49ZM44 49C44 53.964 48.036 58 53 58C57.964 58 62 53.964 62 49C62 44.036 57.964 40 53 40C48.036 40 44 44.036 44 49Z" fill="#FF7A59" stroke="#FF7A59" stroke-linejoin="round"/>
<path d="M120 114L2 84M123 56L5 84L123 56Z" stroke="#FF7A59" stroke-width="10" stroke-linejoin="round"/>
<path d="M120 58L45 5" stroke="#FF7A59" stroke-width="10" stroke-linejoin="round"/>
<path d="M49 9L7 84" stroke="#FF7A59" stroke-width="10" stroke-linejoin="round"/>
<path d="M8 82L40 166" stroke="#FF7A59" stroke-width="10" stroke-linejoin="round"/>
<path d="M37 157L118 114" stroke="#FF7A59" stroke-width="10" stroke-linejoin="round"/>
<path d="M120 114L2 84" stroke="#FF7A59" stroke-width="10" stroke-linejoin="round"/>
</svg>

</span>
            <span class = "loadingLogo2"><svg width="40" height="80" viewBox="0 0 75 131" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M73.5 5L14.5 10.5L69.5 126.5" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
<path d="M69.5 123L1 125.5" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
</svg>
</span>
            <span class = "loadingLogo3"><svg width="50" height="80" viewBox="0 0 77 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 45H76.5" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
<path d="M38.3915 1L38.3535 140.274" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
</svg>
</span>
            <span class = "loadingLogo4"><svg width="40" height="80" viewBox="0 0 39 134" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 17C5.5 7.901 12.9 0.5 22 0.5C31.1 0.5 38.5 7.901 38.5 17C38.5 26.099 31.1 33.5 22 33.5C12.901 33.5 5.5 26.1 5.5 17ZM13 17C13 21.964 17.036 26 22 26C26.964 26 31 21.964 31 17C31 12.036 26.964 8 22 8C17.036 8 13 12.036 13 17Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
<path d="M5 132.99L6.28802 48" stroke="#33475B" stroke-width="10" stroke-linejoin="round"/>
</svg>
</span>
              <span class = "loadingLogo5"><svg width="60" height="80" viewBox="0 0 86 127" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 63.5C0.5 46.081 5.30001 30.307 13.023 18.901C20.749 7.492 31.362 0.5 43 0.5C54.638 0.5 65.251 7.492 72.977 18.901C80.7 30.307 85.5 46.081 85.5 63.5C85.5 80.919 80.7 96.693 72.977 108.099C65.251 119.508 54.638 126.5 43 126.5C31.362 126.5 20.749 119.508 13.023 108.099C5.30001 96.693 0.5 80.919 0.5 63.5ZM7.31799 63.499C7.31799 77.911 11.287 91 17.72 100.501C24.151 109.998 33.084 115.954 43 115.954C52.916 115.954 61.849 109.998 68.28 100.501C74.713 91 78.682 77.911 78.682 63.499C78.682 49.087 74.713 35.998 68.28 26.498C61.849 17.001 52.916 11.045 43 11.045C33.084 11.045 24.151 17.001 17.72 26.498C11.287 35.998 7.31799 49.087 7.31799 63.499Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
              <path d="M25.6445 48.0529C25.6445 41.7729 27.3745 36.1009 30.1425 32.0129C32.9125 27.9219 36.6845 25.4629 40.7805 25.4629C44.8765 25.4629 48.6485 27.9219 51.4185 32.0129C54.1865 36.1009 55.9165 41.7729 55.9165 48.0529C55.9165 54.3339 54.1865 60.0059 51.4185 64.0939C48.6485 68.1849 44.8765 70.6439 40.7805 70.6439C36.6855 70.6439 32.9135 68.1849 30.1425 64.0939C27.3745 60.0059 25.6445 54.3339 25.6445 48.0529ZM32.4625 48.0529C32.4625 51.3239 33.3625 54.3109 34.8405 56.4949C36.3175 58.6749 38.4085 60.0989 40.7805 60.0989C43.1525 60.0989 45.2445 58.6749 46.7205 56.4949C48.1995 54.3109 49.0985 51.3239 49.0985 48.0529C49.0985 44.7829 48.1995 41.7959 46.7205 39.6119C45.2445 37.4319 43.1525 36.0079 40.7805 36.0079C38.4085 36.0079 36.3165 37.4319 34.8405 39.6129C33.3615 41.7959 32.4625 44.7829 32.4625 48.0529Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
              <path d="M62.5949 116.809L62.5939 116.81C56.1189 122.344 48.7959 125.251 41.4149 125.251C34.0339 125.251 26.712 122.344 20.236 116.81C19.17 115.898 18.4609 114.152 18.4609 112.191V96.9741C18.4609 92.2671 19.7949 88.0181 21.9229 84.9601C24.0529 81.8991 26.945 80.0691 30.075 80.0691H52.7549C55.8859 80.0691 58.7769 81.8991 60.9069 84.9601C63.0359 88.0201 64.3699 92.2701 64.3699 96.9801V112.197C64.3699 114.153 63.6599 115.904 62.5949 116.809ZM57.348 109.153C57.484 109.053 57.558 108.892 57.551 108.728V96.9801C57.551 95.2681 57.0409 93.6961 56.1949 92.5401C55.3479 91.3841 54.1379 90.6151 52.7549 90.6151H30.075C28.692 90.6151 27.4809 91.3841 26.6349 92.5401C25.7879 93.6961 25.2789 95.2681 25.2789 96.9801V108.75C25.2789 108.909 25.3539 109.059 25.4819 109.153C35.3879 116.441 47.442 116.441 57.348 109.153Z" fill="#33475B" stroke="#33475B" stroke-linejoin="round"/>
              </svg>
              </span>
          
        </div>
        );
};
