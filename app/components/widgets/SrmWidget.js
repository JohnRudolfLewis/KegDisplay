import React from 'react';
import {filter, min} from 'underscore';
import numeral from 'numeral';

class SrmWidget extends React.Component {
	render() {
		//var keg = this.props.keg;
		//var srm = keg && keg.srm || 0.0;
		var srm = this.props.srm ? this.props.srm : 0.0;

		var srmToColor = [
			{ "srm": 0.1, "color": "rgb(248,248,230))" },
			{ "srm": 0.2, "color": "rgb(248,248,220))" },
			{ "srm": 0.3, "color": "rgb(247,247,199))" },
			{ "srm": 0.4, "color": "rgb(244,249,185))" },
			{ "srm": 0.5, "color": "rgb(247,249,180))" },
			{ "srm": 0.6, "color": "rgb(248,249,178))" },
			{ "srm": 0.7, "color": "rgb(244,246,169))" },
			{ "srm": 0.8, "color": "rgb(245,247,166))" },
			{ "srm": 0.9, "color": "rgb(246,247,156))" },
			{ "srm": 1, "color": "rgb(243,249,147))" },
			{ "srm": 1.1, "color": "rgb(246,248,141))" },
			{ "srm": 1.2, "color": "rgb(246,249,136))" },
			{ "srm": 1.3, "color": "rgb(245,250,128))" },
			{ "srm": 1.4, "color": "rgb(246,249,121))" },
			{ "srm": 1.5, "color": "rgb(248,249,114)" },
			{ "srm": 1.6, "color": "rgb(243,249,104)" },
			{ "srm": 1.7, "color": "rgb(246,248,107)" },
			{ "srm": 1.8, "color": "rgb(248,247,99)" },
			{ "srm": 1.9, "color": "rgb(245,247,92)" },
			{ "srm": 2, "color": "rgb(248,247,83)" },
			{ "srm": 2.1, "color": "rgb(244,248,72)" },
			{ "srm": 2.2, "color": "rgb(248,247,73)" },
			{ "srm": 2.3, "color": "rgb(246,247,62)" },
			{ "srm": 2.4, "color": "rgb(241,248,53)" },
			{ "srm": 2.5, "color": "rgb(244,247,48)" },
			{ "srm": 2.6, "color": "rgb(246,249,40)" },
			{ "srm": 2.7, "color": "rgb(243,249,34)" },
			{ "srm": 2.8, "color": "rgb(245,247,30)" },
			{ "srm": 2.9, "color": "rgb(248,245,22)" },
			{ "srm": 3, "color": "rgb(246,245,19)" },
			{ "srm": 3.1, "color": "rgb(244,242,22)" },
			{ "srm": 3.2, "color": "rgb(244,240,21)" },
			{ "srm": 3.3, "color": "rgb(243,242,19)" },
			{ "srm": 3.4, "color": "rgb(244,238,24)" },
			{ "srm": 3.5, "color": "rgb(244,237,29)" },
			{ "srm": 3.6, "color": "rgb(238,233,22)" },
			{ "srm": 3.7, "color": "rgb(240,233,23)" },
			{ "srm": 3.8, "color": "rgb(238,231,25)" },
			{ "srm": 3.9, "color": "rgb(234,230,21)" },
			{ "srm": 4, "color": "rgb(236,230,26)" },
			{ "srm": 4.1, "color": "rgb(230,225,24)" },
			{ "srm": 4.2, "color": "rgb(232,225,25)" },
			{ "srm": 4.3, "color": "rgb(230,221,27)" },
			{ "srm": 4.4, "color": "rgb(224,218,23)" },
			{ "srm": 4.5, "color": "rgb(229,216,31)" },
			{ "srm": 4.6, "color": "rgb(229,214,30)" },
			{ "srm": 4.7, "color": "rgb(223,213,26)" },
			{ "srm": 4.8, "color": "rgb(226,213,28)" },
			{ "srm": 4.9, "color": "rgb(223,209,29)" },
			{ "srm": 5, "color": "rgb(224,208,27)" },
			{ "srm": 5.1, "color": "rgb(224,204,32)" },
			{ "srm": 5.2, "color": "rgb(221,204,33)" },
			{ "srm": 5.3, "color": "rgb(220,203,29)" },
			{ "srm": 5.4, "color": "rgb(218,200,32)" },
			{ "srm": 5.5, "color": "rgb(220,197,34)" },
			{ "srm": 5.6, "color": "rgb(218,196,41)" },
			{ "srm": 5.7, "color": "rgb(217,194,43)" },
			{ "srm": 5.8, "color": "rgb(216,192,39)" },
			{ "srm": 5.9, "color": "rgb(213,190,37)" },
			{ "srm": 6, "color": "rgb(213,188,38)" },
			{ "srm": 6.1, "color": "rgb(212,184,39)" },
			{ "srm": 6.2, "color": "rgb(214,183,43)" },
			{ "srm": 6.3, "color": "rgb(213,180,45)" },
			{ "srm": 6.4, "color": "rgb(210,179,41)" },
			{ "srm": 6.5, "color": "rgb(208,178,42)" },
			{ "srm": 6.6, "color": "rgb(208,176,46)" },
			{ "srm": 6.7, "color": "rgb(204,172,48)" },
			{ "srm": 6.8, "color": "rgb(204,172,52)" },
			{ "srm": 6.9, "color": "rgb(205,170,55)" },
			{ "srm": 7, "color": "rgb(201,167,50)" },
			{ "srm": 7.1, "color": "rgb(202,167,52)" },
			{ "srm": 7.2, "color": "rgb(201,166,51)" },
			{ "srm": 7.3, "color": "rgb(199,162,54)" },
			{ "srm": 7.4, "color": "rgb(198,160,56)" },
			{ "srm": 7.5, "color": "rgb(200,158,60)" },
			{ "srm": 7.6, "color": "rgb(194,156,54)" },
			{ "srm": 7.7, "color": "rgb(196,155,54)" },
			{ "srm": 7.8, "color": "rgb(198,151,60)" },
			{ "srm": 7.9, "color": "rgb(193,150,60)" },
			{ "srm": 8, "color": "rgb(191,146,59)" },
			{ "srm": 8.1, "color": "rgb(190,147,57)" },
			{ "srm": 8.2, "color": "rgb(190,147,59)" },
			{ "srm": 8.3, "color": "rgb(190,145,60)" },
			{ "srm": 8.4, "color": "rgb(186,148,56)" },
			{ "srm": 8.5, "color": "rgb(190,145,58)" },
			{ "srm": 8.6, "color": "rgb(193,145,59)" },
			{ "srm": 8.7, "color": "rgb(190,145,58)" },
			{ "srm": 8.8, "color": "rgb(191,143,59)" },
			{ "srm": 8.9, "color": "rgb(191,141,61)" },
			{ "srm": 9, "color": "rgb(190,140,58)" },
			{ "srm": 9.1, "color": "rgb(192,140,61)" },
			{ "srm": 9.2, "color": "rgb(193,138,62)" },
			{ "srm": 9.3, "color": "rgb(192,137,59)" },
			{ "srm": 9.4, "color": "rgb(193,136,59)" },
			{ "srm": 9.5, "color": "rgb(195,135,63)" },
			{ "srm": 9.6, "color": "rgb(191,136,58)" },
			{ "srm": 9.7, "color": "rgb(191,134,67)" },
			{ "srm": 9.8, "color": "rgb(193,131,67)" },
			{ "srm": 9.9, "color": "rgb(190,130,58)" },
			{ "srm": 10, "color": "rgb(191,129,58)" },
			{ "srm": 10.1, "color": "rgb(191,131,57)" },
			{ "srm": 10.2, "color": "rgb(191,129,58)" },
			{ "srm": 10.3, "color": "rgb(191,129,58)" },
			{ "srm": 10.4, "color": "rgb(190,129,55)" },
			{ "srm": 10.5, "color": "rgb(191,127,59)" },
			{ "srm": 10.6, "color": "rgb(194,126,59)" },
			{ "srm": 10.7, "color": "rgb(188,128,54)" },
			{ "srm": 10.8, "color": "rgb(190,124,55)" },
			{ "srm": 10.9, "color": "rgb(193,122,55)" },
			{ "srm": 11, "color": "rgb(190,124,55)" },
			{ "srm": 11.1, "color": "rgb(194,121,59)" },
			{ "srm": 11.2, "color": "rgb(193,120,56)" },
			{ "srm": 11.3, "color": "rgb(190,119,52)" },
			{ "srm": 11.4, "color": "rgb(182,117,54)" },
			{ "srm": 11.5, "color": "rgb(196,116,59)" },
			{ "srm": 11.6, "color": "rgb(191,118,56)" },
			{ "srm": 11.7, "color": "rgb(190,116,57)" },
			{ "srm": 11.8, "color": "rgb(191,115,58)" },
			{ "srm": 11.9, "color": "rgb(189,115,56)" },
			{ "srm": 12, "color": "rgb(191,113,56)" },
			{ "srm": 12.1, "color": "rgb(191,113,53)" },
			{ "srm": 12.2, "color": "rgb(188,112,57)" },
			{ "srm": 12.3, "color": "rgb(190,112,55)" },
			{ "srm": 12.4, "color": "rgb(184,110,52)" },
			{ "srm": 12.5, "color": "rgb(188,109,55)" },
			{ "srm": 12.6, "color": "rgb(189,109,55)" },
			{ "srm": 12.7, "color": "rgb(186,106,50)" },
			{ "srm": 12.8, "color": "rgb(190,103,52)" },
			{ "srm": 12.9, "color": "rgb(189,104,54)" },
			{ "srm": 13, "color": "rgb(188,103,51)" },
			{ "srm": 13.1, "color": "rgb(188,103,51)" },
			{ "srm": 13.2, "color": "rgb(186,101,51)" },
			{ "srm": 13.3, "color": "rgb(186,102,56)" },
			{ "srm": 13.4, "color": "rgb(185,100,56)" },
			{ "srm": 13.5, "color": "rgb(185,98,59)" },
			{ "srm": 13.6, "color": "rgb(183,98,54)" },
			{ "srm": 13.7, "color": "rgb(181,100,53)" },
			{ "srm": 13.8, "color": "rgb(182,97,55)" },
			{ "srm": 13.9, "color": "rgb(177,97,51)" },
			{ "srm": 14, "color": "rgb(178,96,51)" },
			{ "srm": 14.1, "color": "rgb(176,96,49)" },
			{ "srm": 14.2, "color": "rgb(177,96,55)" },
			{ "srm": 14.3, "color": "rgb(178,95,55)" },
			{ "srm": 14.4, "color": "rgb(171,94,55)" },
			{ "srm": 14.5, "color": "rgb(171,92,56)" },
			{ "srm": 14.6, "color": "rgb(172,93,59)" },
			{ "srm": 14.7, "color": "rgb(168,92,55)" },
			{ "srm": 14.8, "color": "rgb(169,90,54)" },
			{ "srm": 14.9, "color": "rgb(168,88,57)" },
			{ "srm": 15, "color": "rgb(165,89,54)" },
			{ "srm": 15.1, "color": "rgb(166,88,54)" },
			{ "srm": 15.2, "color": "rgb(165,88,58)" },
			{ "srm": 15.3, "color": "rgb(161,88,52)" },
			{ "srm": 15.4, "color": "rgb(163,85,55)" },
			{ "srm": 15.5, "color": "rgb(160,86,56)" },
			{ "srm": 15.6, "color": "rgb(158,85,57)" },
			{ "srm": 15.7, "color": "rgb(158,86,54)" },
			{ "srm": 15.8, "color": "rgb(159,84,57)" },
			{ "srm": 15.9, "color": "rgb(156,83,53)" },
			{ "srm": 16, "color": "rgb(152,83,54)" },
			{ "srm": 16.1, "color": "rgb(150,83,55)" },
			{ "srm": 16.2, "color": "rgb(150,81,56)" },
			{ "srm": 16.3, "color": "rgb(146,81,56)" },
			{ "srm": 16.4, "color": "rgb(147,79,54)" },
			{ "srm": 16.5, "color": "rgb(147,79,55)" },
			{ "srm": 16.6, "color": "rgb(146,78,54)" },
			{ "srm": 16.7, "color": "rgb(142,77,51)" },
			{ "srm": 16.8, "color": "rgb(143,79,53)" },
			{ "srm": 16.9, "color": "rgb(142,77,54)" },
			{ "srm": 17, "color": "rgb(141,76,50)" },
			{ "srm": 17.1, "color": "rgb(140,75,50)" },
			{ "srm": 17.2, "color": "rgb(138,73,49)" },
			{ "srm": 17.3, "color": "rgb(135,70,45)" },
			{ "srm": 17.4, "color": "rgb(136,71,49)" },
			{ "srm": 17.5, "color": "rgb(140,72,49)" },
			{ "srm": 17.6, "color": "rgb(128,70,45)" },
			{ "srm": 17.7, "color": "rgb(129,71,46)" },
			{ "srm": 17.8, "color": "rgb(130,69,47)" },
			{ "srm": 17.9, "color": "rgb(123,69,45)" },
			{ "srm": 18, "color": "rgb(124,69,45)" },
			{ "srm": 18.1, "color": "rgb(121,66,40)" },
			{ "srm": 18.2, "color": "rgb(120,67,40)" },
			{ "srm": 18.3, "color": "rgb(119,64,38)" },
			{ "srm": 18.4, "color": "rgb(116,63,34)" },
			{ "srm": 18.5, "color": "rgb(120,63,35)" },
			{ "srm": 18.6, "color": "rgb(120,62,37)" },
			{ "srm": 18.7, "color": "rgb(112,63,35)" },
			{ "srm": 18.8, "color": "rgb(111,62,36)" },
			{ "srm": 18.9, "color": "rgb(109,60,34)" },
			{ "srm": 19, "color": "rgb(107,58,30)" },
			{ "srm": 19.1, "color": "rgb(106,57,31)" },
			{ "srm": 19.2, "color": "rgb(107,56,31)" },
			{ "srm": 19.3, "color": "rgb(105,56,28)" },
			{ "srm": 19.4, "color": "rgb(105,56,28)" },
			{ "srm": 19.5, "color": "rgb(104,52,31)" },
			{ "srm": 19.6, "color": "rgb(102,53,27)" },
			{ "srm": 19.7, "color": "rgb(100,53,26)" },
			{ "srm": 19.8, "color": "rgb(99,52,25)" },
			{ "srm": 19.9, "color": "rgb(93,53,24)" },
			{ "srm": 20, "color": "rgb(93,52,26)" },
			{ "srm": 20.1, "color": "rgb(89,49,20)" },
			{ "srm": 20.2, "color": "rgb(90,50,21)" },
			{ "srm": 20.3, "color": "rgb(91,48,20)" },
			{ "srm": 20.4, "color": "rgb(83,48,15)" },
			{ "srm": 20.5, "color": "rgb(88,48,17)" },
			{ "srm": 20.6, "color": "rgb(86,46,17)" },
			{ "srm": 20.7, "color": "rgb(81,45,15)" },
			{ "srm": 20.8, "color": "rgb(83,44,15)" },
			{ "srm": 20.9, "color": "rgb(81,45,15)" },
			{ "srm": 21, "color": "rgb(78,42,12)" },
			{ "srm": 21.1, "color": "rgb(77,43,12)" },
			{ "srm": 21.2, "color": "rgb(75,41,12)" },
			{ "srm": 21.3, "color": "rgb(74,41,5)" },
			{ "srm": 21.4, "color": "rgb(78,40,23)" },
			{ "srm": 21.5, "color": "rgb(83,43,46)" },
			{ "srm": 21.6, "color": "rgb(78,43,41)" },
			{ "srm": 21.7, "color": "rgb(78,40,41)" },
			{ "srm": 21.8, "color": "rgb(76,41,41)" },
			{ "srm": 21.9, "color": "rgb(74,39,39)" },
			{ "srm": 22, "color": "rgb(74,39,39)" },
			{ "srm": 22.1, "color": "rgb(69,39,35)" },
			{ "srm": 22.2, "color": "rgb(70,37,37)" },
			{ "srm": 22.3, "color": "rgb(68,38,36)" },
			{ "srm": 22.4, "color": "rgb(64,35,34)" },
			{ "srm": 22.5, "color": "rgb(64,35,34)" },
			{ "srm": 22.6, "color": "rgb(62,33,32)" },
			{ "srm": 22.7, "color": "rgb(58,33,31)" },
			{ "srm": 22.8, "color": "rgb(61,33,31)" },
			{ "srm": 22.9, "color": "rgb(58,33,33)" },
			{ "srm": 23, "color": "rgb(54,31,27)" },
			{ "srm": 23.1, "color": "rgb(52,29,28)" },
			{ "srm": 23.2, "color": "rgb(52,29,28)" },
			{ "srm": 23.3, "color": "rgb(49,28,27)" },
			{ "srm": 23.4, "color": "rgb(48,27,26)" },
			{ "srm": 23.5, "color": "rgb(48,27,26)" },
			{ "srm": 23.6, "color": "rgb(44,25,25)" },
			{ "srm": 23.7, "color": "rgb(44,25,23)" },
			{ "srm": 23.8, "color": "rgb(42,24,26)" },
			{ "srm": 23.9, "color": "rgb(40,23,22)" },
			{ "srm": 24, "color": "rgb(38,23,22)" },
			{ "srm": 24.1, "color": "rgb(38,23,22)" },
			{ "srm": 24.2, "color": "rgb(38,23,22)" },
			{ "srm": 24.3, "color": "rgb(38,23,22)" },
			{ "srm": 24.4, "color": "rgb(38,23,22)" },
			{ "srm": 24.5, "color": "rgb(38,23,22)" },
			{ "srm": 24.6, "color": "rgb(38,23,22)" },
			{ "srm": 24.7, "color": "rgb(38,23,22)" },
			{ "srm": 24.8, "color": "rgb(38,23,22)" },
			{ "srm": 24.9, "color": "rgb(38,23,22)" },
			{ "srm": 25, "color": "rgb(38,23,22)" },
			{ "srm": 25.1, "color": "rgb(38,23,22)" },
			{ "srm": 25.2, "color": "rgb(38,23,22)" },
			{ "srm": 25.3, "color": "rgb(38,23,22)" },
			{ "srm": 25.4, "color": "rgb(38,23,22)" },
			{ "srm": 25.5, "color": "rgb(38,23,22)" },
			{ "srm": 25.6, "color": "rgb(38,23,24)" },
			{ "srm": 25.7, "color": "rgb(25,16,15)" },
			{ "srm": 25.8, "color": "rgb(25,16,15)" },
			{ "srm": 25.9, "color": "rgb(25,16,15)" },
			{ "srm": 26, "color": "rgb(25,16,15)" },
			{ "srm": 26.1, "color": "rgb(25,16,15)" },
			{ "srm": 26.2, "color": "rgb(25,16,15)" },
			{ "srm": 26.3, "color": "rgb(25,16,15)" },
			{ "srm": 26.4, "color": "rgb(25,16,15)" },
			{ "srm": 26.5, "color": "rgb(25,16,15)" },
			{ "srm": 26.6, "color": "rgb(25,16,15)" },
			{ "srm": 26.7, "color": "rgb(25,16,15)" },
			{ "srm": 26.8, "color": "rgb(25,16,15)" },
			{ "srm": 26.9, "color": "rgb(25,16,15)" },
			{ "srm": 27, "color": "rgb(25,16,15)" },
			{ "srm": 27.1, "color": "rgb(25,16,15)" },
			{ "srm": 27.2, "color": "rgb(25,16,15)" },
			{ "srm": 27.3, "color": "rgb(18,13,12)" },
			{ "srm": 27.4, "color": "rgb(18,13,12)" },
			{ "srm": 27.5, "color": "rgb(18,13,12)" },
			{ "srm": 27.6, "color": "rgb(18,13,12)" },
			{ "srm": 27.7, "color": "rgb(18,13,12)" },
			{ "srm": 27.8, "color": "rgb(18,13,12)" },
			{ "srm": 27.9, "color": "rgb(18,13,12)" },
			{ "srm": 28, "color": "rgb(18,13,12)" },
			{ "srm": 28.1, "color": "rgb(18,13,12)" },
			{ "srm": 28.2, "color": "rgb(18,13,12)" },
			{ "srm": 28.3, "color": "rgb(18,13,12)" },
			{ "srm": 28.4, "color": "rgb(18,13,12)" },
			{ "srm": 28.5, "color": "rgb(18,13,12)" },
			{ "srm": 28.6, "color": "rgb(18,13,12)" },
			{ "srm": 28.7, "color": "rgb(17,13,10)" },
			{ "srm": 28.8, "color": "rgb(18,13,12)" },
			{ "srm": 28.9, "color": "rgb(16,11,10)" },
			{ "srm": 29, "color": "rgb(16,11,10)" },
			{ "srm": 29.1, "color": "rgb(16,11,10)" },
			{ "srm": 29.2, "color": "rgb(16,11,10)" },
			{ "srm": 29.3, "color": "rgb(16,11,10)" },
			{ "srm": 29.4, "color": "rgb(16,11,10)" },
			{ "srm": 29.5, "color": "rgb(16,11,10)" },
			{ "srm": 29.6, "color": "rgb(16,11,10)" },
			{ "srm": 29.7, "color": "rgb(16,11,10)" },
			{ "srm": 29.8, "color": "rgb(16,11,10)" },
			{ "srm": 29.9, "color": "rgb(16,11,10)" },
			{ "srm": 30, "color": "rgb(16,11,10)" },
			{ "srm": 30.1, "color": "rgb(16,11,10)" },
			{ "srm": 30.2, "color": "rgb(16,11,10)" },
			{ "srm": 30.3, "color": "rgb(16,11,10)" },
			{ "srm": 30.4, "color": "rgb(16,11,10)" },
			{ "srm": 30.5, "color": "rgb(14,9,8)" },
			{ "srm": 30.6, "color": "rgb(15,10,9)" },
			{ "srm": 30.7, "color": "rgb(14,9,8)" },
			{ "srm": 30.8, "color": "rgb(14,9,8)" },
			{ "srm": 30.9, "color": "rgb(14,9,8)" },
			{ "srm": 31, "color": "rgb(14,9,8)" },
			{ "srm": 31.1, "color": "rgb(14,9,8)" },
			{ "srm": 31.2, "color": "rgb(14,9,8)" },
			{ "srm": 31.3, "color": "rgb(14,9,8)" },
			{ "srm": 31.4, "color": "rgb(14,9,8)" },
			{ "srm": 31.5, "color": "rgb(14,9,8)" },
			{ "srm": 31.6, "color": "rgb(14,9,8)" },
			{ "srm": 31.7, "color": "rgb(14,9,8)" },
			{ "srm": 31.8, "color": "rgb(14,9,8)" },
			{ "srm": 31.9, "color": "rgb(14,9,8)" },
			{ "srm": 32, "color": "rgb(15,11,8)" },
			{ "srm": 32.1, "color": "rgb(12,9,7)" },
			{ "srm": 32.2, "color": "rgb(12,9,7)" },
			{ "srm": 32.3, "color": "rgb(12,9,7)" },
			{ "srm": 32.4, "color": "rgb(12,9,7)" },
			{ "srm": 32.5, "color": "rgb(12,9,7)" },
			{ "srm": 32.6, "color": "rgb(12,9,7)" },
			{ "srm": 32.7, "color": "rgb(12,9,7)" },
			{ "srm": 32.8, "color": "rgb(12,9,7)" },
			{ "srm": 32.9, "color": "rgb(12,9,7)" },
			{ "srm": 33, "color": "rgb(12,9,7)" },
			{ "srm": 33.1, "color": "rgb(12,9,7)" },
			{ "srm": 33.2, "color": "rgb(12,9,7)" },
			{ "srm": 33.3, "color": "rgb(12,9,7)" },
			{ "srm": 33.4, "color": "rgb(12,9,7)" },
			{ "srm": 33.5, "color": "rgb(12,9,7)" },
			{ "srm": 33.6, "color": "rgb(12,9,7)" },
			{ "srm": 33.7, "color": "rgb(10,7,7)" },
			{ "srm": 33.8, "color": "rgb(10,7,5)" },
			{ "srm": 33.9, "color": "rgb(8,7,7)" },
			{ "srm": 34, "color": "rgb(8,7,7)" },
			{ "srm": 34.1, "color": "rgb(8,7,7)" },
			{ "srm": 34.2, "color": "rgb(8,7,7)" },
			{ "srm": 34.3, "color": "rgb(8,7,7)" },
			{ "srm": 34.4, "color": "rgb(8,7,7)" },
			{ "srm": 34.5, "color": "rgb(8,7,7)" },
			{ "srm": 34.6, "color": "rgb(8,7,7)" },
			{ "srm": 34.7, "color": "rgb(8,7,7)" },
			{ "srm": 34.8, "color": "rgb(8,7,7)" },
			{ "srm": 34.9, "color": "rgb(8,7,7)" },
			{ "srm": 35, "color": "rgb(8,7,7)" },
			{ "srm": 35.1, "color": "rgb(8,7,7)" },
			{ "srm": 35.2, "color": "rgb(8,7,7)" },
			{ "srm": 35.3, "color": "rgb(7,6,6)" },
			{ "srm": 35.4, "color": "rgb(7,6,6)" },
			{ "srm": 35.5, "color": "rgb(7,6,6)" },
			{ "srm": 35.6, "color": "rgb(7,6,6)" },
			{ "srm": 35.7, "color": "rgb(7,6,6)" },
			{ "srm": 35.8, "color": "rgb(7,6,6)" },
			{ "srm": 35.9, "color": "rgb(7,6,6)" },
			{ "srm": 36, "color": "rgb(7,6,6)" },
			{ "srm": 36.1, "color": "rgb(7,6,6)" },
			{ "srm": 36.2, "color": "rgb(7,6,6)" },
			{ "srm": 36.3, "color": "rgb(7,6,6)" },
			{ "srm": 36.4, "color": "rgb(7,6,6)" },
			{ "srm": 36.5, "color": "rgb(7,6,6)" },
			{ "srm": 36.6, "color": "rgb(7,6,6)" },
			{ "srm": 36.7, "color": "rgb(7,7,4)" },
			{ "srm": 36.8, "color": "rgb(6,6,3)" },
			{ "srm": 36.9, "color": "rgb(6,5,5)" },
			{ "srm": 37, "color": "rgb(4,5,4)" },
			{ "srm": 37.1, "color": "rgb(4,5,4)" },
			{ "srm": 37.2, "color": "rgb(4,5,4)" },
			{ "srm": 37.3, "color": "rgb(4,5,4)" },
			{ "srm": 37.4, "color": "rgb(4,5,4)" },
			{ "srm": 37.5, "color": "rgb(4,5,4)" },
			{ "srm": 37.6, "color": "rgb(4,5,4)" },
			{ "srm": 37.7, "color": "rgb(4,5,4)" },
			{ "srm": 37.8, "color": "rgb(4,5,4)" },
			{ "srm": 37.9, "color": "rgb(4,5,4)" },
			{ "srm": 38, "color": "rgb(4,5,4)" },
			{ "srm": 38.1, "color": "rgb(4,5,4)" },
			{ "srm": 38.2, "color": "rgb(4,5,4)" },
			{ "srm": 38.3, "color": "rgb(4,5,4)" },
			{ "srm": 38.4, "color": "rgb(4,5,4)" },
			{ "srm": 38.5, "color": "rgb(3,4,3)" },
			{ "srm": 38.6, "color": "rgb(4,5,4)" },
			{ "srm": 38.7, "color": "rgb(3,4,3)" },
			{ "srm": 38.8, "color": "rgb(3,4,3)" },
			{ "srm": 38.9, "color": "rgb(3,4,3)" },
			{ "srm": 39, "color": "rgb(3,4,3)" },
			{ "srm": 39.1, "color": "rgb(3,4,3)" },
			{ "srm": 39.2, "color": "rgb(3,4,3)" },
			{ "srm": 39.3, "color": "rgb(3,4,3)" },
			{ "srm": 39.4, "color": "rgb(3,4,3)" },
			{ "srm": 39.5, "color": "rgb(3,4,3)" },
			{ "srm": 39.6, "color": "rgb(3,4,3)" },
			{ "srm": 39.7, "color": "rgb(3,4,3)" },
			{ "srm": 39.8, "color": "rgb(3,4,3)" },
			{ "srm": 39.9, "color": "rgb(3,4,3)" },
			{ "srm": 40, "color": "rgb(3,4,3)" }
    	];

    	var rgb = min(filter(srmToColor, function(elem) {return elem.srm > srm}), function(elem) { return elem.srm }).color;

		var indicatorStyle = {
			backgroundColor: rgb
		};


		return (
			<div className="srm">
				<div className="srm-container">
					<div className="srm-indicator" style={indicatorStyle}></div>
					<div className="srm-stroke"></div>
				</div>
				<p>{numeral(srm).format('0.0')} SRM</p>
			</div>
			);
		
	}
}

export default SrmWidget;