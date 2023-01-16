import { IChildrenHitItem } from './../../../../shared/interfaces/children-hit-item';
import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {
  @Input()
  public comments!: IChildrenHitItem[]

  public nestedDataSource = new MatTreeNestedDataSource<IChildrenHitItem>()

  public nestedTreeControl = new NestedTreeControl<IChildrenHitItem>(node => node.children)

  constructor(){}

  ngOnInit(): void {
    this.nestedDataSource.data = this.comments
  }

  public hasNestedChild(index: number, node: IChildrenHitItem): boolean{
    return node?.children?.length > 0
  }
}
