export enum RelationshipType {
	MARRIED = 'M',
}

export interface IRelationship {
	id?: number;
	content_object1: string;
	content_object2: string;
	object_id1: number;
	object_id2: number;
	relationship_type: RelationshipType;
}

export class Relationship implements IRelationship {
	id: number;
	content_object1: string;
	content_object2: string;
	object_id1: number;
	object_id2: number;
	relationship_type: RelationshipType;

	constructor(obj: IRelationship) {
		this.id = obj.id;
		this.content_object1 = obj.content_object1;
		this.content_object2 = obj.content_object2;
		this.object_id1 = obj.object_id1;
		this.object_id2 = obj.object_id2;
		this.relationship_type = obj.relationship_type;
	}
}