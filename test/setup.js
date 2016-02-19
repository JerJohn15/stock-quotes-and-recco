/**
*@author - JerJohn15
@details - This file contains the configurations for generating a fake dom
to test within each individual component in the ComponentsTest file. 
*/
//jsdom is called before using react
import jsdom from 'jsdom';
//generate fake dom and window
const fake_DOM = '<!doctype html><html><body></body></html>';
global.document = jsdom.jsdom(fake_DOM);
global.window = document.defaultView;
global.navigator = window.navigator;
