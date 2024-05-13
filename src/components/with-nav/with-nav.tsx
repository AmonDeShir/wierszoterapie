import { PropsWithChildren, useLayoutEffect, useRef } from "react";
import { Container } from "./with-nav.styles";
import { NavBar, NavProps } from "../nav/nav";
import gsap from "gsap";

type Props = PropsWithChildren<{ id?: string } & NavProps>;

export const WithNavigation = ({children, id, ...props}: Props ) => {
  const ref = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    if (props.active == (location.hash ? location.hash : "#wierszoterapie")) {
      return;
    }

    let ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { y: '+=100', opacity: 0}, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 60%',
        }
      });

      gsap.fromTo(nav.current, { opacity: 0}, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: nav.current,
          start: 'top 40%',
        }
      });
    });
    
    return () => ctx.revert();
  });

  return (
    <Container id={id}>
      <NavBar {...props} ref={nav} />

      <Container ref={ref}>
        {children}
      </Container>
    </Container>
  )
};