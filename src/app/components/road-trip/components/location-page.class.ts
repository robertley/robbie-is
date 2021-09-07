import { ActivatedRoute, Router } from "@angular/router";
import { BottomNavigationConfig } from "../../common/bottom-navigation/bottom-navigation.component";
import { ImageObj } from "./tile/tile.component";

export class LocationPage {

    constructor(private router: Router, private route: ActivatedRoute) {}

    thisUrl: string;
    nextTitle: string;
    prevTitle: string;
    prevUrl: string;
    nextUrl: string;

    imageObjects: ImageObj[] = [];
    selectedImage: ImageObj | null = null;
  
    itemsPerPage = 12;
    pageNumber = 1;
    totalPages = 1;
  
    visibleImageObjects: ImageObj[];
  
    bottomNavConfig: BottomNavigationConfig;

    locationPageInit() {

        this.route.params.subscribe(params => {
            if (params['page'] == null) {
                this.pageNumber = 1;
                return;
            }
    
            this.pageNumber = +params['page'];
        });

        this.setVisibleImages();

        this.router.events.subscribe(() => {
            this.setVisibleImages();
        })
      
        this.totalPages = Math.ceil(this.imageObjects.length / this.itemsPerPage);

        this.bottomNavConfig = {
            leftNav: () => {
              if (this.pageNumber == 1) {
                
                if (this.prevTitle == null) {
                    return null;
                }

                return {
                    text: this.prevTitle,
                    url: `/on-a-road-trip/${this.prevUrl}/`
                }
              }
          
              return {
                text: "page " + (this.pageNumber - 1),
                url: `/on-a-road-trip/${this.thisUrl}/` + (this.pageNumber - 1)
              }
            },
      
            rightNav: () => {
              if (this.pageNumber == this.totalPages) {
                if (this.nextTitle == null) {
                    return null
                }

                return  { 
                  text: this.nextTitle,
                  url: `/on-a-road-trip/${this.nextUrl}`
                }
              }
          
              return {
                text: "page " + (this.pageNumber + 1),
                url: `/on-a-road-trip/${this.thisUrl}/` + (this.pageNumber + 1)
              }
            }
          }
    }

    setVisibleImages() {
        this.visibleImageObjects = this.imageObjects.slice(this.itemsPerPage * (this.pageNumber - 1), Math.min(this.itemsPerPage * this.pageNumber, this.imageObjects.length));
    }
    
}