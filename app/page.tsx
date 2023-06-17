"use client";
import Image from 'next/image'
import { setInterval, clearInterval }from 'worker-timers';
import ClickMeButton from "./components/ClickMeButton";
import Counter from "./components/Counter";
import RightSide from './components/RightSide';
import { useEffect, useState } from 'react';
import LeftSide from './components/LeftSide';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [clickDamage, setClickDamage] = useState<number>(1);
  const [autoclickPerSecond, setAutoclickPerSecond] = useState<number>(0);
  const [upgrades, setUpgrades] = useState([
    {
      name: "Auto clicker",
      price: 10,
      clickRates: 1,
      count: 0,
    },
    {
      name: "Personnal assistant",
      price: 50,
      clickRates: 10,
      count: 0,
    }
  ]);
  const [powers, setPowers] = useState([
    {
      name: "Click damage",
      price: 10,
      priceMultiplier: 10,
      damage: 1,
      count: 0,
    }
  ]);

  useEffect(() => {
    const triggerAutoClickers = () => {
      setCount(count + (autoclickPerSecond/10));
    };
    
    const intervalId= setInterval(triggerAutoClickers, 100);

    document.title = `You've earned ${~~count} clicks!`;
    
    return () => {
      clearInterval(intervalId);
    };
  }, [autoclickPerSecond, count, upgrades]);

  const handleClick: any = () => {
    setCount(count + clickDamage);
  }

  const activeUpgrade = (index: any) => {
    let costPrice = 0;
	  let countAutoclickPerSecond = 0;
    const updatedUpgrades = upgrades.map((upgrade: any, i: any) => {
      if (i === index) {
        costPrice = upgrade.price;
        upgrade.count++;
        upgrade.price = Math.floor(upgrade.price * 1.2);
      }
      countAutoclickPerSecond = countAutoclickPerSecond + (upgrade.clickRates * upgrade.count);
      return upgrade;
    });    
	  setAutoclickPerSecond(countAutoclickPerSecond);
    setUpgrades(updatedUpgrades);
    setCount(count - costPrice);
  }


  const activePower = (index: any) => {    
    let costPrice = 0;
    let powerDamage = 0;
    const updatedPowers = powers.map((power: any, i: any) => {
      if (i === index) {
        costPrice = power.price;
        powerDamage = power.damage;
        power.damage = power.damage * 4;
        power.count++;
        power.price = power.price * power.priceMultiplier;
      }
      return power;
    });
    setPowers(updatedPowers);
    setCount(count - costPrice);
    setClickDamage(clickDamage + powerDamage);
  }
  
  return (
    <>
      <LeftSide count={count} powers={powers} activePower={activePower} clickDamage={clickDamage} />
      <RightSide count={count} upgrades={upgrades} activeUpgrade={activeUpgrade} autoclickPerSecond={autoclickPerSecond} />
      <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24">
      <Counter count={ count } />
      <ClickMeButton handleClick={handleClick} />
      </main>
    </>
  )
}
