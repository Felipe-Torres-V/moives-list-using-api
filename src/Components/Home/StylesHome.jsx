import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: #0b0000;
  justify-content: space-between;
  align-items: center;
  color: #df0707;
  padding: 10px;
  font-family: sans-serif;
`;
export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: xx-large;
`;
export const Search = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  width: 40%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;
export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;
`;
export const HomePlaceholder = styled.img`
    width: 120px;
    height: 120px;
    margin: 150px;
    opacity: 50%;
`;