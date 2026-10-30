import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  input: {
    borderColor: "blue",
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    margin: 5,
    color: "white",
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#d604df",
  },
  text: {
    color: "#fff",
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    marginLeft: 15,
  },
  button: {
    color: "#001933",
    backgroundColor: "white",
  },
  splash: {
    backgroundColor: "#d604df",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  splashText: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
  },
});
