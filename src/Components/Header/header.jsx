import React, { Component } from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div class="flex justify-between w-screen h-11.5 mt-1 w-full text-gray-700 bg-gray-100">
        <div class="taskBar flex w-100">
          <div class="flex items-center w-18 px-2.5 rounded hover:bg-gray-300">
            <button class="name_button ">
              <svg
                class="w-6 h-6 stroke-current strok-1"
                stroke="currentColor"
                viewBox="0 0 50 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6.25 33.75H43.75V30H6.25V33.75ZM6.25 24.375H43.75V20.625H6.25V24.375ZM6.25 11.25V15H43.75V11.25H6.25Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          {/* Logo SVG Start */}

          <div class="px-2 mt-2">
            <svg
              width="100"
              height="50"
              viewBox="0 0 804 312"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M246.7 69.7999V69.7999C246.7 65.4423 243.157 61.8997 238.8 61.8997C234.442 61.8997 230.9 65.4428 230.9 69.7999C230.9 74.1574 234.443 77.7 238.8 77.7C243.157 77.7 246.7 74.1574 246.7 69.7999ZM224.5 69.7999C224.5 61.914 230.914 55.5 238.8 55.5C246.686 55.5 253.1 61.914 253.1 69.7999C253.1 77.6861 246.686 84.0997 238.8 84.0997C230.914 84.0997 224.5 77.6857 224.5 69.7999Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M0.5 223.8C0.5 215.914 6.91403 209.5 14.7999 209.5C22.6861 209.5 29.0997 215.914 29.0997 223.8C29.0997 231.686 22.6861 238.1 14.7999 238.1C6.91403 238.1 0.5 231.686 0.5 223.8ZM6.89971 223.8C6.89971 228.157 10.4427 231.7 14.7999 231.7C19.1574 231.7 22.7 228.157 22.7 223.8C22.7 219.442 19.157 215.9 14.7999 215.9C10.4423 215.9 6.89971 219.442 6.89971 223.8Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M175.5 166.8C175.5 158.914 181.914 152.5 189.8 152.5C197.686 152.5 204.1 158.914 204.1 166.8C204.1 174.686 197.686 181.1 189.8 181.1C181.914 181.1 175.5 174.686 175.5 166.8ZM181.9 166.8C181.9 171.157 185.443 174.7 189.8 174.7C194.157 174.7 197.7 171.157 197.7 166.8C197.7 162.442 194.157 158.9 189.8 158.9C185.442 158.9 181.9 162.443 181.9 166.8Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M237.5 161.7C237.5 139.536 255.536 121.5 277.7 121.5C299.865 121.5 317.9 139.536 317.9 161.7C317.9 183.865 299.865 201.9 277.7 201.9C255.536 201.9 237.5 183.865 237.5 161.7ZM243.9 161.7C243.9 180.339 259.061 195.5 277.7 195.5C296.339 195.5 311.5 180.339 311.5 161.7C311.5 143.06 296.339 127.9 277.7 127.9C259.061 127.9 243.9 143.06 243.9 161.7Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M261.3 151.8C261.3 143.914 267.714 137.5 275.6 137.5C283.486 137.5 289.9 143.914 289.9 151.8C289.9 159.686 283.486 166.1 275.6 166.1C267.714 166.1 261.3 159.686 261.3 151.8ZM267.7 151.8C267.7 156.157 271.243 159.7 275.6 159.7C279.957 159.7 283.5 156.157 283.5 151.8C283.5 147.442 279.957 143.9 275.6 143.9C271.242 143.9 267.7 147.443 267.7 151.8Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M296.304 195.68L296.303 195.68C290.178 199.225 283.227 201.1 276.2 201.1C269.173 201.1 262.223 199.225 256.097 195.68C255.108 195.107 254.5 194.051 254.5 192.909V183.155C254.5 177.295 259.406 172.5 265.466 172.5H286.934C292.994 172.5 297.9 177.295 297.9 183.159V192.913C297.9 194.052 297.292 195.111 296.304 195.68ZM291.223 191.151C291.402 191.062 291.508 190.876 291.499 190.682V183.159C291.499 180.775 289.414 178.9 286.933 178.9H265.466C262.985 178.9 260.9 180.775 260.9 183.159V190.703C260.9 190.893 261.007 191.066 261.177 191.151C270.527 195.809 281.873 195.809 291.223 191.151Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M718.5 180.5C718.5 163.081 723.3 147.307 731.023 135.901C738.749 124.492 749.362 117.5 761 117.5C772.638 117.5 783.251 124.492 790.977 135.901C798.7 147.307 803.5 163.081 803.5 180.5C803.5 197.919 798.7 213.693 790.977 225.099C783.251 236.508 772.638 243.5 761 243.5C749.362 243.5 738.749 236.508 731.023 225.099C723.3 213.693 718.5 197.919 718.5 180.5ZM725.318 180.499C725.318 194.911 729.287 208 735.72 217.501C742.151 226.998 751.084 232.954 761 232.954C770.916 232.954 779.849 226.998 786.28 217.501C792.713 208 796.682 194.911 796.682 180.499C796.682 166.087 792.713 152.998 786.28 143.498C779.849 134.001 770.916 128.045 761 128.045C751.084 128.045 742.151 134.001 735.72 143.498C729.287 152.998 725.318 166.087 725.318 180.499Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M743.645 165.053C743.645 158.773 745.375 153.101 748.143 149.013C750.913 144.922 754.685 142.463 758.781 142.463C762.877 142.463 766.649 144.922 769.419 149.013C772.187 153.101 773.917 158.773 773.917 165.053C773.917 171.334 772.187 177.006 769.419 181.094C766.649 185.185 762.877 187.644 758.781 187.644C754.686 187.644 750.914 185.185 748.143 181.094C745.375 177.006 743.645 171.334 743.645 165.053ZM750.463 165.053C750.463 168.324 751.363 171.311 752.841 173.495C754.318 175.675 756.409 177.099 758.781 177.099C761.153 177.099 763.245 175.675 764.721 173.495C766.2 171.311 767.099 168.324 767.099 165.053C767.099 161.783 766.2 158.796 764.721 156.612C763.245 154.432 761.153 153.008 758.781 153.008C756.409 153.008 754.317 154.432 752.841 156.613C751.362 158.796 750.463 161.783 750.463 165.053Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M780.595 233.809L780.594 233.81C774.119 239.344 766.796 242.251 759.415 242.251C752.034 242.251 744.712 239.344 738.236 233.81C737.17 232.898 736.461 231.152 736.461 229.191V213.974C736.461 209.267 737.795 205.018 739.923 201.96C742.053 198.899 744.945 197.069 748.075 197.069H770.755C773.886 197.069 776.777 198.899 778.907 201.96C781.036 205.02 782.37 209.27 782.37 213.98V229.197C782.37 231.153 781.66 232.904 780.595 233.809ZM775.348 226.153C775.484 226.053 775.558 225.892 775.551 225.728V213.98C775.551 212.268 775.041 210.696 774.195 209.54C773.348 208.384 772.138 207.615 770.755 207.615H748.075C746.692 207.615 745.481 208.384 744.635 209.54C743.788 210.696 743.279 212.268 743.279 213.98V225.75C743.279 225.909 743.354 226.059 743.482 226.153C753.388 233.441 765.442 233.441 775.348 226.153Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M360.5 132C360.5 122.901 367.9 115.5 377 115.5C386.1 115.5 393.5 122.901 393.5 132C393.5 141.099 386.1 148.5 377 148.5C367.901 148.5 360.5 141.1 360.5 132ZM368 132C368 136.964 372.036 141 377 141C381.964 141 386 136.964 386 132C386 127.036 381.964 123 377 123C372.036 123 368 127.036 368 132Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M687.5 124C687.5 114.901 694.9 107.5 704 107.5C713.1 107.5 720.5 114.901 720.5 124C720.5 133.099 713.1 140.5 704 140.5C694.901 140.5 687.5 133.1 687.5 124ZM695 124C695 128.964 699.036 133 704 133C708.964 133 713 128.964 713 124C713 119.036 708.964 115 704 115C699.036 115 695 119.036 695 124Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M130.6 270.7C130.6 248.536 148.635 230.5 170.8 230.5C192.964 230.5 211 248.535 211 270.7C211 292.864 192.964 310.9 170.8 310.9C148.635 310.9 130.6 292.865 130.6 270.7ZM137 270.7C137 289.339 152.161 304.5 170.8 304.5C189.439 304.5 204.6 289.339 204.6 270.7C204.6 252.06 189.439 236.9 170.8 236.9C152.161 236.9 137 252.06 137 270.7Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M156.5 259.6C156.5 251.714 162.914 245.3 170.8 245.3C178.686 245.3 185.1 251.714 185.1 259.6C185.1 267.485 178.686 273.9 170.8 273.9C162.914 273.9 156.5 267.486 156.5 259.6ZM162.9 259.6C162.9 263.957 166.443 267.5 170.8 267.5C175.157 267.5 178.7 263.957 178.7 259.6C178.7 255.242 175.157 251.7 170.8 251.7C166.442 251.7 162.9 255.243 162.9 259.6Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M190.904 305.48L190.903 305.48C184.778 309.025 177.827 310.9 170.8 310.9C163.773 310.9 156.823 309.025 150.697 305.48C149.708 304.907 149.1 303.851 149.1 302.709V292.955C149.1 287.095 154.007 282.3 160.066 282.3H181.534C187.594 282.3 192.5 287.095 192.5 292.959V302.712C192.5 303.852 191.892 304.911 190.904 305.48ZM185.823 300.951C186.002 300.862 186.108 300.676 186.1 300.482V292.959C186.1 290.575 184.014 288.7 181.533 288.7H160.066C157.585 288.7 155.5 290.575 155.5 292.959V300.503C155.5 300.693 155.607 300.866 155.777 300.951C165.127 305.609 176.473 305.609 185.823 300.951Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M23.1743 163.08C24.0863 140.934 42.8487 123.656 64.9945 124.568C87.1398 125.48 104.418 144.242 103.506 166.388C102.594 188.534 83.832 205.812 61.6863 204.9C39.5405 203.988 22.2623 185.226 23.1743 163.08ZM29.569 163.343C28.802 181.967 43.3261 197.738 61.9496 198.505C80.5731 199.272 96.3448 184.748 97.1117 166.125C97.8787 147.501 83.3546 131.729 64.7311 130.963C46.1076 130.196 30.3359 144.72 29.569 163.343Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M49.5093 153.055C49.8337 145.176 56.5058 139.031 64.3854 139.356C72.2645 139.68 78.4092 146.353 78.0848 154.232C77.7603 162.111 71.0882 168.256 63.2086 167.931C55.3295 167.607 49.1848 160.934 49.5093 153.055ZM55.9036 153.318C55.7243 157.672 59.1185 161.358 63.4719 161.537C67.8254 161.716 71.5112 158.322 71.6905 153.968C71.8698 149.615 68.4755 145.929 64.1221 145.75C59.7682 145.571 56.0829 148.964 55.9036 153.318Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M81.9964 200.312L81.9955 200.312C75.7291 203.602 68.7069 205.189 61.6862 204.9C54.6656 204.611 47.7978 202.452 41.8232 198.658C40.8586 198.045 40.2946 196.964 40.3416 195.823L40.743 186.078C40.9841 180.222 46.0837 175.633 52.1385 175.883L73.5875 176.766C79.6422 177.015 84.3473 182.008 84.106 187.867L83.7047 197.612C83.6579 198.751 83.0064 199.784 81.9964 200.312ZM77.1057 195.578C77.2885 195.496 77.4019 195.315 77.4014 195.12L77.7109 187.604C77.809 185.222 75.8023 183.263 73.3238 183.161L51.8747 182.277C49.3962 182.175 47.2352 183.963 47.1371 186.345L46.8267 193.883C46.8189 194.072 46.9189 194.25 47.0851 194.341C56.2354 199.38 67.5724 199.847 77.1057 195.578Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M119.5 40.7001C119.5 18.5356 137.536 0.5 159.7 0.5C181.864 0.5 199.9 18.5356 199.9 40.7001C199.9 62.8646 181.865 80.9003 159.7 80.9003C137.536 80.9003 119.5 62.8646 119.5 40.7001ZM125.9 40.7001C125.9 59.3394 141.061 74.5001 159.7 74.5001C178.339 74.5001 193.5 59.3394 193.5 40.7001C193.5 22.0609 178.339 6.90014 159.7 6.90014C141.061 6.90014 125.9 22.0609 125.9 40.7001Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M167.6 29.5997V29.5997C167.6 25.2421 164.058 21.6995 159.7 21.6995C155.343 21.6995 151.8 25.2426 151.8 29.5997C151.8 33.9572 155.343 37.4998 159.7 37.4998C164.057 37.4998 167.6 33.9572 167.6 29.5997ZM145.4 29.5997C145.4 21.7138 151.814 15.2998 159.7 15.2998C167.586 15.2998 174 21.7142 174 29.6001C174 37.4859 167.586 43.8995 159.7 43.8995C151.814 43.8995 145.4 37.4855 145.4 29.5997Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M178.304 74.6797L178.303 74.6803C172.178 78.2254 165.227 80.1001 158.2 80.1001C151.173 80.1001 144.223 78.2255 138.097 74.6804C137.108 74.1074 136.5 73.0513 136.5 71.9087V62.1555C136.5 56.2952 141.406 51.5 147.466 51.5H168.934C174.993 51.5 179.9 56.2947 179.9 62.1594V71.9127C179.9 73.0518 179.292 74.1109 178.304 74.6797ZM173.223 70.151C173.402 70.0618 173.508 69.8763 173.499 69.682V62.1594C173.499 59.7749 171.414 57.9001 168.933 57.9001H147.466C144.985 57.9001 142.9 59.7749 142.9 62.1594V69.7035C142.9 69.8931 143.007 70.0665 143.177 70.151C152.527 74.8088 163.873 74.8088 173.223 70.151Z"
                fill="#3AAFA9"
                stroke="#3AAFA9"
                stroke-linejoin="round"
              />
              <path
                d="M128.14 52.1323C88.4999 71.0002 70.9999 98.5002 64.9999 126.5"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M209 271.5C250.5 258 268 240.5 275 197"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M136.329 273.792C87.9999 265.5 69.6713 226.208 66.4999 204"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M197 49.4517C213.373 51.3037 225.841 55.4816 235.459 62.3422"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <line
                x1="245"
                y1="167"
                x2="201"
                y2="167"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M447 139L329 167M444 197L326 167"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M546 115L487 120.5L542 236.5"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M550 116L538.151 165.615L377 168"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
                stroke-dasharray="20 20"
              />
              <path
                d="M444 141L369 88"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M687 239.99L688.288 155"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M576 145L652.5 145"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M653.5 141.502L678.5 131"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
                stroke-dasharray="20 20"
              />
              <path
                d="M614.392 101L614.354 240.274"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M474 237L576 147"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
                stroke-dasharray="20 20"
              />
              <path
                d="M373 92L331 167"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M332 165L364 249"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M361 240L442 197"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M444 197L326 167"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="M542 233L473.5 235.5"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <line
                x1="42.7536"
                y1="192.095"
                x2="20.7536"
                y2="217.095"
                stroke="#3AAFA9"
                stroke-width="10"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          {/* Logo SVG End */}
        </div>

        <div class="flex space-x-4">
          <div>
            <svg
              class="mt-3"
              width="35"
              height="35"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4998 0.416992C12.5498 0.416992 0.416504 12.5503 0.416504 27.5003C0.416504 42.4503 12.5498 54.5837 27.4998 54.5837C42.4498 54.5837 54.5832 42.4503 54.5832 27.5003C54.5832 12.5503 42.4498 0.416992 27.4998 0.416992ZM27.4998 8.54199C31.9957 8.54199 35.6248 12.1712 35.6248 16.667C35.6248 21.1628 31.9957 24.792 27.4998 24.792C23.004 24.792 19.3748 21.1628 19.3748 16.667C19.3748 12.1712 23.004 8.54199 27.4998 8.54199ZM27.4998 47.0003C20.729 47.0003 14.7436 43.5337 11.2498 38.2795C11.3311 32.8899 22.0832 29.9378 27.4998 29.9378C32.8894 29.9378 43.6686 32.8899 43.7498 38.2795C40.2561 43.5337 34.2707 47.0003 27.4998 47.0003Z"
                fill="#3AAFA9"
              />
            </svg>
          </div>

          <div class="py-4 h-10">
            <span>Name</span>
          </div>

          <div class="flex-1">
            <button class="profileBarButton w-8 h-8 mt-4 mr-4">
              <svg
                class="ml-2"
                width="25"
                height="25"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.125 18.75L22.5 28.125L31.875 18.75H13.125Z"
                  fill="#3AAFA9"
                />
              </svg>
            </button>
            <div class="profileBar flex flex-col space-y-4 absolute right-0 w-40 rounded bg-blue-200 hidden">
              <button class="h-6">
                <span class="font-bold">Account Profile</span>
              </button>
              <button class="h-6">
                <span class="font-bold">Personal Profile</span>
              </button>
              <button class="h-6">
                <span class="font-bold">Setting</span>
              </button>
              <button class="h-6">
                <span class="font-bold">Log out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex flex-col h-full absolute top-14 -left-8 text-gray-700 bg-gray-100">
        <div class=" ml-1 mr-1 flex flex-col items-center w-18 transition duration-400">
          <a
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              class="w-6 h-6 stroke-current"
              viewBox="0 0 40 35"
              stroke="currentColor"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.3286 15.8167L33.2664 10.1203V3.53996C33.2664 2.35015 32.2403 1.3859 30.9722 1.3859C29.7071 1.3859 28.681 2.35015 28.681 3.53996V5.81163L24.1672 1.57004C21.9355 -0.525835 18.0554 -0.522118 15.8289 1.57383L0.671097 15.8167C-0.223699 16.6592 -0.223699 18.0224 0.671097 18.8636C1.5663 19.7058 3.01984 19.7058 3.91471 18.8636L19.071 4.6203C19.5648 4.15877 20.435 4.15877 20.9262 4.61893L36.0851 18.8636C36.5346 19.2847 37.1206 19.4942 37.7065 19.4942C38.2935 19.4942 38.8805 19.2845 39.3287 18.8636C40.2238 18.0225 40.2238 16.6593 39.3286 15.8167Z"
                fill="black"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.7961 8.7096C20.3558 8.29602 19.6427 8.29602 19.2036 8.7096L5.87085 21.2342C5.66035 21.4319 5.54102 21.7019 5.54102 21.9836V31.1186C5.54102 33.2622 7.39068 35.0002 9.67184 35.0002H16.2729V25.3941H23.7254V35.0002H30.3266C32.6077 35.0002 34.4573 33.2622 34.4573 31.1187V21.9836C34.4573 21.7019 34.339 21.4319 34.1275 21.2342L20.7961 8.7096Z"
                fill="black"
              />
            </svg>

            <span
              class="nameHomepage hidden ml-2 text-sm font-medium"
              id="Homepage"
            >
              HomePage
            </span>
          </a>
          <a
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 transition duration-400"
            href="#"
          >
            <svg
              class="w-6 h-6 stroke-current"
              viewBox="0 0 40 35"
              stroke="currentColor"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 10.2881C16.7693 10.2881 14.1406 7.988 14.1406 5.16113C14.1406 2.33427 16.7693 0.0341797 20 0.0341797C23.2307 0.0341797 25.8594 2.33427 25.8594 5.16113C25.8594 7.988 23.2307 10.2881 20 10.2881Z"
                fill="black"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M0.783307 29.3263C-0.831459 26.878 0.130963 23.7367 2.92909 22.3228C5.78464 20.8815 9.34182 21.7892 10.9331 24.1994C12.552 26.6514 11.5924 29.7855 8.78846 31.2029C5.97909 32.6204 2.4012 31.7768 0.783307 29.3263Z"
                fill="black"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M31.2116 31.2029C28.4095 29.7864 27.4472 26.6528 29.067 24.1994C30.6582 21.7893 34.2153 20.8814 37.071 22.3229C39.869 23.7368 40.8315 26.878 39.2168 29.3263C37.6009 31.7737 34.025 32.6225 31.2116 31.2029Z"
                fill="black"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.78836 18.8393L2.44922 18.7272C2.75359 13.8766 5.71539 9.38646 10.3708 6.71484L11.6571 8.42916C7.62078 10.7454 5.05383 14.6376 4.78836 18.8393Z"
                fill="black"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M35.2115 18.8393C34.9461 14.6376 32.3791 10.7453 28.3428 8.42916L29.6291 6.71484C34.2846 9.38646 37.2463 13.8766 37.5507 18.7272L35.2115 18.8393Z"
                fill="black"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.0001 34.966C17.2123 34.966 14.547 34.4113 12.0762 33.3187L13.1336 31.4883C17.4137 33.3829 22.5864 33.3829 26.8665 31.4883L27.9239 33.3187C25.4532 34.4113 22.7879 34.966 20.0001 34.966Z"
                fill="black"
              />
            </svg>
            <span class="nameUnion hidden ml-2 text-sm font-medium" id="Union">
              Union
            </span>
          </a>
          <a
            class="flex items-center w-full h-12 px-3 mt-2 hover:bg-gray-300 transition duration-400"
            href="#"
          >
            <svg
              class="w-6 h-6 stroke-current"
              stroke="currentColor"
              viewBox="0 0 40 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 0C14.1845 0 9.45312 4.13991 9.45312 9.22852C9.45312 14.3171 14.1845 18.457 20 18.457C25.8155 18.457 30.5469 14.3171 30.5469 9.22852C30.5469 4.13991 25.8155 0 20 0Z"
                fill="black"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M33.1223 24.486C30.2348 21.9206 26.407 20.5078 22.3438 20.5078H17.6562C13.5931 20.5078 9.76516 21.9206 6.87766 24.486C4.0043 27.0388 2.42188 30.4085 2.42188 33.9746C2.42188 34.5409 2.94656 35 3.59375 35H36.4062C37.0534 35 37.5781 34.5409 37.5781 33.9746C37.5781 30.4085 35.9957 27.0388 33.1223 24.486Z"
                fill="black"
              />
            </svg>
            <span
              class="nameLinkage hidden ml-2 text-sm font-medium"
              id="Linkage"
            >
              Linkage
            </span>
          </a>
          <a
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 transition duration-400"
            href="#"
          >
            <svg
              class="w-6 h-6 stroke-current"
              stroke="currentColor"
              viewBox="0 0 40 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M40 7.13006H22V11.775H40V7.13006ZM40 25.71H22V30.355H40V25.71ZM7.08 16.42L0 8.19841L2.82 4.92369L7.06 9.84738L15.54 0L18.36 3.27472L7.08 16.42ZM7.08 35L0 26.7784L2.82 23.5036L7.06 28.4273L15.54 18.58L18.36 21.8547L7.08 35Z"
                fill="black"
              />
            </svg>
            <span class="nameTask hidden ml-2 text-sm font-medium" id="Task">
              Task
            </span>
          </a>
          <a
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 transition duration-400"
            href="#"
          >
            <svg
              class="w-6 h-6 stroke-current"
              stroke="currentColor"
              viewBox="0 0 40 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M36 3.18182H34V0H30V3.18182H10V0H6V3.18182H4C1.8 3.18182 0 4.61364 0 6.36364V31.8182C0 33.5682 1.8 35 4 35H36C38.2 35 40 33.5682 40 31.8182V6.36364C40 4.61364 38.2 3.18182 36 3.18182ZM36 31.8182H4V11.1364H36V31.8182Z"
                fill="black"
              />
            </svg>
            <span
              class="nameCalendar hidden ml-2 text-sm font-medium"
              id="Calendar"
            >
              Calendar
            </span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
