import styled from "@emotion/styled";

export const Button = styled.a<{ bigger?: boolean }>`
  --width: ${({ bigger }) => bigger ? "42.5rem" : "25rem" };
  cursor: pointer;
  display: block;
  position: relative;
  width: var(--width);
  height: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.ui};
  margin-top: 10px;
  margin-left: auto;
  transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(0.9);
  }

  &::before {
    content: " ";
    z-index: -1;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    width: var(--width);
    height: 8rem;
    border-radius: 10rem;
    transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::before {
      background-color: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.primary};
      transform: scale(0.9);
    }
  }
  
  &:active {
      transform: scale(0.8);
  }
`

export const Button2 = styled.a`
  cursor: pointer;
  display: block;
  position: relative;
  width: 25rem;
  height: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.ui};
  margin-top: 10px;
  margin-left: auto;
  transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;
  &::before {
    content: " ";
    z-index: -1;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    width: 25rem;
    height: 8rem;
    border-radius: 10rem;
    transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    &::before {
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      transform: scale(0.9);
    }
  }
  &:active {
      transform: scale(0.8);
  }
`

export const Button3 = styled.a`
  cursor: pointer;
  position: relative;
  display: block;
  width: 25rem;
  height: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.ui};
  margin-top: 10px;
  margin-left: auto;
  transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;
  &::before {
    content: " ";
    z-index: -1;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    width: 25rem;
    height: 8rem;
    border-radius: 10rem;
    transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;
  }
  &:hover {
    &::before {
      border-color: ${({ theme }) => theme.colors.primary};
      transform: scale(0.9);
    }
  }
  &:active {
    transform: scale(0.8);
  }
`


export const Button4 = styled.a`
  cursor: pointer;
  display: block;
  position: relative;
  width: 25rem;
  height: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 10rem;
  font-family: ${({ theme }) => theme.fonts.ui};
  margin-top: 10px;
  margin-left: auto;
  transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;
  &:hover {
    transform: scale(0.9);
  }
  &:hover {
    transform: scale(0.9);
  }
  &:active {
      transform: scale(0.8);
  }
`


export const SubmitButton = styled.button<{ bigger?: boolean }>`
  --width: ${({ bigger }) => bigger ? "42.5rem" : "25rem" };
  cursor: pointer;
  display: block;
  position: relative;
  width: var(--width);
  height: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.ui};
  margin-top: 10px;
  margin-left: auto;
  transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;
  background: none;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(0.9);
  }

  &::before {
    content: " ";
    z-index: -1;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    width: var(--width);
    height: 8rem;
    border-radius: 10rem;
    transition: transform 0.25s, color 0.5s, background-color 0.5s, border-color 0.5s;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::before {
      background-color: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.primary};
      transform: scale(0.9);
    }
  }
  
  &:active {
      transform: scale(0.8);
  }
`