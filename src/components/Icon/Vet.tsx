import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function VetIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M10 22.047L17.875 30l7.438-4.186L31 22.047l-2.188-6.28-3.5-2.093L22.25 12h-4.375L10 17.023v5.024z"
        fill="#ED6D4E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.678 20.142a2.721 2.721 0 00-.979 1.044 2.143 2.143 0 00-.197.65c-.032.25-.004.494.083.73.128.295.325.507.593.637.169.088.363.148.583.18.31.028.644-.023 1.002-.152.241-.108.469-.245.682-.411.286-.233.5-.493.644-.778l.099-.213c.053-.115.091-.258.113-.427a1.44 1.44 0 00-.068-.781 1.275 1.275 0 00-.557-.638 1.33 1.33 0 00-.554-.176 2.113 2.113 0 00-.994.125 3.94 3.94 0 00-.45.21zm.335-4.838a1.372 1.372 0 00-.623-.08 2.03 2.03 0 00-.82.23c-.283.14-.556.34-.82.601a3.42 3.42 0 00-.556.79 2.96 2.96 0 00-.282.958c-.03.281.005.558.102.831.118.321.326.563.626.725.169.088.355.143.556.167.248.02.52-.017.817-.114.272-.1.538-.254.8-.463.36-.29.64-.635.837-1.038.12-.226.198-.454.234-.686.062-.299.069-.581.02-.847-.08-.428-.295-.748-.642-.957l-.012-.018-.213-.099h-.024zm-9.109 4.97a4.65 4.65 0 00-.816.323c-.375.202-.681.43-.919.683a2.85 2.85 0 00-.44.594c-.106.194-.18.386-.224.579a2.125 2.125 0 00.218 1.543c.164.272.386.492.668.662l.15.08.523.207c.184.047.492.11.925.188l.868.17.428.141c.23.108.398.194.502.257.206.126.428.284.668.476.175.143.433.36.771.65.208.16.374.27.498.325l.044.022.018.017.221.105h.021l.081.036.26.063c.245.045.499.048.76.006.361-.068.675-.203.943-.407.285-.227.502-.525.649-.892.086-.203.146-.442.18-.715a3.299 3.299 0 00-.04-.943 4.709 4.709 0 00-.314-1.06 4.519 4.519 0 01-.299-.87 9.692 9.692 0 01-.164-.907l-.111-.813c-.054-.29-.12-.541-.201-.755a2.205 2.205 0 00-.646-.883 3.378 3.378 0 00-.631-.38 2.069 2.069 0 00-.623-.146 2.424 2.424 0 00-.85.14 8.56 8.56 0 00-.619.275c-.185.095-.454.243-.804.446-.363.208-.67.37-.922.485a3.572 3.572 0 01-.773.298zm2.287-5.628a5.666 5.666 0 00-.16.56 3.03 3.03 0 00.004 1.032c.048.297.154.57.32.82.146.207.31.357.494.449.215.123.45.18.706.167.207-.012.42-.073.637-.182.311-.178.569-.421.772-.73.091-.122.178-.27.26-.444l.132-.394c.07-.22.114-.454.132-.703.01-.394-.05-.761-.183-1.105a1.721 1.721 0 00-.38-.583c-.2-.206-.43-.33-.692-.374a1.312 1.312 0 00-.777.08c-.225.092-.433.23-.62.416-.229.224-.417.496-.565.817l-.08.174zM16.959 15a1.216 1.216 0 00-.79.064 1.602 1.602 0 00-.584.451 2.724 2.724 0 00-.216.315l-.03.033-.125.27-.06.202c-.082.276-.116.55-.102.823.01.311.065.588.165.83.114.292.27.533.47.72.165.148.35.255.556.32.284.079.566.058.847-.062.22-.092.417-.246.593-.464.105-.124.206-.288.301-.493l.108-.287c.068-.22.103-.426.105-.62.02-.413-.046-.8-.197-1.16a1.785 1.785 0 00-.452-.62 1.234 1.234 0 00-.59-.322zm8.279-10.714c.86.86 1.29 1.897 1.29 3.111v6.077h6.074c1.214 0 2.252.43 3.111 1.287.858.86 1.287 1.898 1.287 3.112v4.252c0 1.214-.429 2.251-1.287 3.108-.86.86-1.897 1.29-3.111 1.29h-6.074v6.077c0 1.215-.43 2.252-1.29 3.11C24.38 36.57 23.344 37 22.129 37h-4.252c-1.214 0-2.252-.43-3.111-1.29-.858-.857-1.287-1.894-1.287-3.109v-6.076h-6.08c-1.215 0-2.252-.43-3.11-1.29C3.43 24.378 3 23.341 3 22.126v-4.252c0-1.214.43-2.252 1.29-3.111.857-.858 1.894-1.287 3.109-1.287h6.08V7.398c0-1.215.429-2.252 1.287-3.111C15.625 3.429 16.662 3 17.877 3h4.251c1.215 0 2.251.429 3.109 1.287z"
        fill="#FFCF6F"
      />
    </Svg>
  );
}

export default VetIcon;