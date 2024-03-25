import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="main-heading">Zakat Calculator</h1>
      <div className="quranverse">
        <p>
          وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ ۚ وَمَا تُقَدِّمُوا۟
          لِأَنفُسِكُم مِّنْ خَيْرٍۢ تَجِدُوهُ عِندَ ٱللَّهِ ۗ إِنَّ ٱللَّهَ
          بِمَا تَعْمَلُونَ بَصِيرٌۭ
        </p>
        <p>
          And establish prayer and give Zakat, and whatever good you put forward
          for yourselves  you will find it with Allah.
        </p>
        <p>Quran 2:110</p>
      </div>

      <div className="eligible">
        <p>
          Nisab is the minimum amount that a Muslim must have before being
          obliged to zakat.The Nisab was set by Prophet Muhammad (peace be upon
          him) at a rate equivalent to: 87.48 grams of gold and 612.36 grams of
          silver.
        </p>
      </div>
    </div>
  );
};

export default Header;
