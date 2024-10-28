import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  standalone: true,
  imports: [],
  template: `
    <h1>Direct template</h1>
    <!-- Bind the disabled property on the button element's DOM object -->
    <button [disabled]="isFormValid">Save</button> <br>
    <!-- Bind to the ngSrc property of the NgOptimizedImage directive  -->
    <img [src]="profilePhotoUrl" alt="The current user's profile photo">
    <!-- Bind the role attribute on the <ul> element to the component's listRole property. -->
    <ul [attr.role]="listRole"> 
    <!-- Binds a value to the alt property of the image element's DOM object. -->
    <img src="profile-photo.png" alt="Profile photo of {{ firstName }}" > <br>
    
    <button attr.aria-label="Save changes to {{ objectType }}">Save {{objectType}}</button>

    <!-- When isExpanded is truthy, add the expanded CSS class. -->
    <ul [class.expanded]="isExpanded">

    <ul [class]="listClasses"> List Classes </ul>    
    <section [class]="sectionClasses"> Section Classes </section>    
    <button [class]="buttonClasses"> Button Classes </button>
    <ul class="list" [class]="listType" [class.expanded]="isExpanded"> List Expanded

    <!-- Set the CSS display property based on the isExpanded property. -->
    <section [style.display]="isExpanded ? 'block' : 'none'">

    <!-- Set the CSS height property to a pixel value based on the sectionHeightInPixels property. -->
    <section [style.height.px]="sectionHeightInPixels">

    <ul [style]="listStyles"> List Styles </ul>    
    <section [style]="sectionStyles"> Section Styles </section>
  `,
  // templateUrl: './demo-component.component.html',
  styleUrl: './demo-component.component.css'
})
export class DemoComponentComponent {
  isFormValid = false;
  profilePhotoUrl = 'favicon.ico';
  listRole = 'admin';
  firstName = 'AK';
  objectType = 'file';
  listClasses = 'full-width outlined';  
  sectionClasses = ['expandable', 'elevated'];  
  buttonClasses = {highlighted: true, embiggened: false, };
  listType = 'box';  
  isExpanded = true;
  sectionHeightInPixels = 60;
  listStyles = 'display: flex; padding: 8px'; 
   sectionStyles = {border: '1px solid black', 'font-weight': 'bold',};
}