import { Component, OnInit } from '@angular/core';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import 'grapesjs-blocks-basic';
import 'grapesjs-preset-newsletter';
import 'grapesjs-custom-blocks';
import * as uuid from "uuid/v4";
import {DomSanitizer} from '@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  editor:any;
  constructor() { }

  ngOnInit() {


    this.editor = grapesjs.init({
      showOffsets: 1,
      avoidInlineStyle: 0,
      forceClass: true,
      noticeOnUnload: 0,
      container: '#gjs',
      // dragMode: 'absolute',
      fromElement: true,
      storageManager: { autoload: 0 },
      layerManager: {
        appendTo: '#layers-container'
      },
      blockManager: {
        appendTo: '#blocks'
      },
      styleManager : {  
        appendTo: '#style-manager-container',
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
          },{
            name: 'Flex',
            open: false,
            buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
          },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow','text-align'],
          },{
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background','height','width'],
          },{
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
          }
        ],
      },
              
      assetManager: {
        appendTo: '#assetmanager',
        assets: [
         {
           type: 'image',
           src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
           height: 350,
           width: 250,
         }
        ],
        upload: false
      }
    });

  }

}















