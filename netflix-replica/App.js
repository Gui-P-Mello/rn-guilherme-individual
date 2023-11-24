import { View } from "react-native";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (<>
              <StatusBar style='light'/>
              <Routes/>
          </>
            
        )
}

